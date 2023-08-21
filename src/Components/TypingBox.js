import React, { createRef, useEffect, useMemo, useRef, useState } from "react";
import { generate } from "random-words";
import UpperMenu from "./UpperMenu";
import { useTestMode } from "../Context/TestModeContext";
import Stats from "./Stats";

const TypingBox = () => {
  const inputRef = useRef(null);
  const { testTime } = useTestMode();
  const [countDown, setCountDown] = useState(testTime);
  const [intervalId, setIntervalId] = useState(null);
  const [testStart, setTestStart] = useState(false);
  const [testEnd, setTestEnd] = useState(false);
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const [missedChars, setMissedChars] = useState(0);
  const [extraChars, setExtraChars] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [wordsArray, setWordsArray] = useState(() => {
    return generate(50);
  });

  const [currWordIndex, setCurrWordIndex] = useState(0);
  const [currCharIndex, setCurrCharIndex] = useState(0);
  const [graphData, setGraphData] = useState([]);

  const wordsSpanRef = useMemo(() => {
    return Array(wordsArray.length)
      .fill(0)
      .map((i) => createRef(null));
  }, [wordsArray]);

  // Timer
  const startTimer = () => {
    let intervalId = setInterval(timer, 1000);
    setIntervalId(intervalId);

    function timer() {
      setCountDown((prevCount) => {
        setCorrectChars((correctChars) => {
          setGraphData((graphData) => {
            return [
              ...graphData,
              [
                testTime - prevCount + 1, // adding 1 because test time will start from 15 and countdom will also have starting value of 15 and hence adding 1 as we want the time to start from the count of 1
                correctChars / 5 / ((testTime - prevCount + 1) / 60), // Dividing by 60 as we need the time in minutes
              ],
            ];
          });

          return correctChars;
        });

        if (prevCount === 1) {
          setTestEnd(true);
          clearInterval(intervalId);
          return 0;
        }

        return prevCount - 1;
      });
    }
  };
  //   console.log(wordsSpanRef);

  const resetTest = () => {
    clearInterval(intervalId);
    setCountDown(testTime);
    setCurrWordIndex(0);
    setCurrCharIndex(0);
    setTestStart(false);
    setTestEnd(false);
    resetWordsSpanRefClassname();
    setWordsArray(generate(50));
    focusInput();
  };

  const resetWordsSpanRefClassname = () => {
    wordsSpanRef.map((i) => {
      Array.from(i.current.childNodes).map((j) => {
        j.className = "";
      });
    });
    wordsSpanRef[0].current.childNodes[0].className = "current";
  };

  const handleUserInput = (event) => {
    if (!testStart) {
      startTimer();
      setTestStart(true);
    }
    
    // console.log(event.key);
    if (wordsSpanRef[currWordIndex].current) {
      const allCurrChars = wordsSpanRef[currWordIndex].current.childNodes;

      // Space functionality
      if (event.keyCode === 32) {
        // keyCode for space is 32

        let correctCharsInWord =
          wordsSpanRef[currWordIndex].current.querySelectorAll(".correct");

        if (correctCharsInWord.length === allCurrChars.length) {
          setCorrectWords((prevCorrectWords) => prevCorrectWords + 1);
        }

        if (allCurrChars.length <= currCharIndex) {
          //remove cursor from lastplace in a word
          allCurrChars[currCharIndex - 1].classList.remove("current-right");
        } else {
          //remove cursor from in between of the word
          setMissedChars(
            (prevMissedChars) =>
              prevMissedChars + (allCurrChars.length - currCharIndex)
          );
          allCurrChars[currCharIndex].classList.remove("current");
        }

        wordsSpanRef[currWordIndex + 1].current.childNodes[0].className =
          "current";
        setCurrWordIndex((prevWord) => prevWord + 1);
        setCurrCharIndex(0);

        return;
      }

      //Backspace functionality
      if (event.keyCode === 8) {
        // keyCode for backspace is 8

        if (currCharIndex !== 0) {
          if (allCurrChars.length === currCharIndex) {
            if (allCurrChars[currCharIndex - 1].className.includes("extra")) {
              allCurrChars[currCharIndex - 1].remove();
              allCurrChars[currCharIndex - 2].className += " current-right";
            } else {
              allCurrChars[currCharIndex - 1].className = "current";
            }
            setCurrCharIndex((prevChar) => prevChar - 1);
            return;
          }

          allCurrChars[currCharIndex].className = "";
          allCurrChars[currCharIndex - 1].className = "current";
          setCurrCharIndex((prevChar) => prevChar - 1);
        }

        return;
      }

      // Extra Characters
      if (currCharIndex === allCurrChars.length) {
        let newSpan = document.createElement("span");

        newSpan.innerText = event.key;
        newSpan.className = "incorrect current-right extra";

        allCurrChars[currCharIndex - 1].classList.remove("current-right");

        wordsSpanRef[currWordIndex].current.append(newSpan);
        setCurrCharIndex((prevChar) => prevChar + 1);
        setExtraChars((prevExtraChars) => prevExtraChars + 1);

        return;
      }

      // Correct Characters
      if (event.key === allCurrChars[currCharIndex].innerText) {
        allCurrChars[currCharIndex].className = "correct";
        setCorrectChars((prevCorrectChars) => prevCorrectChars + 1);
      }
      // Incorrect Characters
      else {
        allCurrChars[currCharIndex].className = "incorrect";
        setIncorrectChars((prevIncorrectChars) => prevIncorrectChars + 1);
      }

      if (currCharIndex + 1 === allCurrChars.length) {
        allCurrChars[currCharIndex].className += " current-right";
      } else {
        allCurrChars[currCharIndex + 1].className = "current";
      }

      setCurrCharIndex((prevChar) => prevChar + 1);
    }
  };

  // Calculate WPM
  const calculateWPM = () => {
    return Math.round(correctChars / 5 / (testTime / 60));
  };

  // Calculate Accuracy
  const calculateAccuracy = () => {
    return Math.round((correctWords / currWordIndex) * 100);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    resetTest();
  }, [testTime]);

  useEffect(() => {
    focusInput();
    wordsSpanRef[0].current.childNodes[0].className = "current";
  }, []);

  return (
    <div>
      {testEnd ? (
        <Stats
          wpm={calculateWPM()}
          accuracy={calculateAccuracy()}
          correctChars={correctChars}
          incorrectChars={incorrectChars}
          missedChars={missedChars}
          extraChars={extraChars}
          graphData={graphData}
        />
      ) : (
        <div>
          <UpperMenu
            className="upper-menu"
            countDown={countDown}
            reset={resetTest}
          />
          <div className="type-box" onClick={focusInput}>
            <div className="words">
              {wordsArray.map((word, index) => (
                <span key={index} className="word" ref={wordsSpanRef[index]}>
                  {word.split("").map((char, i) => (
                    <span key={i}>{char}</span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      <input
        type="text"
        ref={inputRef}
        className="hidden-input"
        onKeyDown={handleUserInput}
      />
    </div>
  );
};

export default TypingBox;
