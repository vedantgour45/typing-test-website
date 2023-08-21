import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import React from "react";

const TableUserData = ({ data }) => {
  return (
    <div className="table">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>WPM</TableCell>
              <TableCell>Accuracy</TableCell>
              <TableCell>Characters</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, i) => (
              <TableRow key={i}>
                <TableCell>{item.wpm}</TableCell>
                <TableCell>{item.accuracy}</TableCell>
                <TableCell>
                  <Tooltip title={`Correct / Incorrect / Missed / Extra`}>
                    <span>
                      {item.correctCharacters} / {item.incorrectCharacters} /{" "}
                      {item.missedCharacters} / {item.extraCharacters}
                    </span>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  {item.timeStamp.toDate().toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableUserData;
