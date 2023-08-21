import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.background};
        color:  ${({ theme }) => theme.textColor};
        margin: 0;
        padding: 0;
        transition: all 0.25s linear;
        font-family: 'Nunito', sans-serif;    
    }

    .canvas {
        display: grid;
        min-height: 100vh;
        grid-auto-flow: row;
        grid-template-row: auto 1fr auto;
        gap: 0.5rem;
        padding: 3rem;
        width: 100vw;
        align-items: center;
        text-align: center;
    }

    .type-box {
        display: block;
        max-width: 1000px;
        height: 140px;
        margin-right: auto;
        margin-left: auto;
        overflow: hidden;
    }

    .upper-menu {
        margin-bottom: 1rem;
    }

    .words {
        font-size: 26px;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        color: ${({ theme }) => theme.typeBoxText};
    }

    .word {
        margin: 5px;
        padding-right: 2px;
    }

    .hidden-input {
        opacity: 0;
    }

    .current {
        border-left: 1px solid;
        animation: blinking 2s infinite;
        animation-timing-function: ease;

        @keyframes blinking {
            0% {border-left-color: white}
            25% {border-left-color: black}
            50% {border-left-color: white}
            75% {border-left-color: black}
            100% {border-left-color: white}
        }
    }

    .current-right {
        border-right: 1px solid;
        animation: blinkingRight 2s infinite;
        animation-timing-function: ease;

        @keyframes blinkingRight {
            0% {border-right-color: white}
            25% {border-right-color: black}
            50% {border-right-color: white}
            75% {border-right-color: black}
            100% {border-right-color: white}
        }
    }

    .correct {
        color: green;
    }

    .incorrect {
        color: red;
    }

    .upper-menu {
        display: flex;
        width: 1000px;
        margin-right: auto;
        margin-left: auto;
        justify-content: space-between;
        align-items: center;
        font-size: 1.35rem;
        padding: 0.5rem;

    }

    .counter {
        font-size: 2rem;
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .reload-btn {
        width: fit-content;
        margin-right: auto;
        margin-left: auto;
        margin-top: 1rem;
        cursor: pointer;
        border: 1px solid ${({ theme }) => theme.typeBoxText};
        border-radius: 10px;
        box-shadow: 0px 0px 6px ${({ theme }) => theme.typeBoxText};
        padding: 0.1rem 0.2rem;
        padding-top: 0.3rem;
        color: ${({ theme }) => theme.typeBoxText};

    }

    .reload-btn:hover {
        box-shadow: 0px 2px 5px ${({ theme }) => theme.typeBoxText};
    }

    .modes {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }

    .time-mode {
        border: 1px solid ${({ theme }) => theme.typeBoxText};
        border-radius: 10px;
        box-shadow: 0px 0px 6px ${({ theme }) => theme.typeBoxText};
        padding: 0.3rem;
    }

    .time-mode:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.typeBoxText};
        box-shadow: 0px 2px 5px ${({ theme }) => theme.typeBoxText};
    }

    .footer {
        width: 1000px;
        display: flex;
        justify-content: space-between;
        margin-right: auto;
        margin-left: auto;
    }

    .themeButton {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 20%;
    }

    .heading {
        color: ${({ theme }) => theme.typeBoxText};
        font-weight: 600;
        border-top: 1.5px solid;
        border-bottom: 1.5px solid;
        padding: 0.2rem;
    }

    .stats-box {
        display: flex;
        width: 1000px;
        height: auto;
        margin-right: auto;
        margin-left: auto;
    }

    .left-stats {
        width: 30%;
        padding: 30px;
        display: flex;
        flex-direction: column;
    }

    .right-stats {
        width: 70%
    }

    .title {
        font-size: 18px;
        color: ${({ theme }) => theme.textColor};
        opacity: 0.6;
        display: flex;
        border-bottom: 1px solid;
        margin-bottom: 0.5rem;
    }

    .subtitle {
        font-size: 30px;
        display: flex;
        align-items: center;
        gap: 1rem;
        color: ${({ theme }) => theme.typeBoxText}
    }

    .chars {
        font-size: 20px;
        color: ${({ theme }) => theme.typeBoxText};
        text-align: left;
        border-bottom: 1px solid ${({ theme }) => theme.textColor};
        padding-bottom: 0.4rem;
        opacity: 0.8;
    }

    .again {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .again:hover {
        transform: scale(1.4);
        transition: transform 0.5s ease-in-out;
    }

    .header {
        width: 1000px;
        margin-top: 0;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        padding: 0
    }

    .user-and-logout {
        display: flex;
        gap: 1rem;
    }

    .logo {
        transition: transform ease-in-out 0.7s;
    }

    .logo:hover {
        transform: scale(1.1);
    }

    .logo img {
        padding: 0;
        width: 150px;
        filter: drop-shadow(5px 5px 5px #000000)
    }

    .tagline {
        margin-top: -35px;
        font-family: 'Square Peg', cursive;
        font-size: 2rem;
        font-weight: 1000;
        letter-spacing: 0.2rem;
        color: ${({ theme }) => theme.typeBoxText};
    }


    .modal  {
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(3px);
    }

    .modal-content {
        width: 400px;
        border: 1px solid ${({ theme }) => theme.typeBoxText};
        padding: 0.3rem;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
        background: ${({ theme }) => theme.background};
        text-align: center;
    }

    .appBar {
        background: transparent;
        border-radius: 7px;
    }

    .login-form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
   
    .btn {
        color: Black;
        font-weight: 600;
        background:  white;
        opacity: 0.8;
        border: 1.5px solid black;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
        transition: all 0.3s;
        text-transform: capitalize;
    }

    .btn:hover {
        background: transparent;
        letter-spacing: 0.3em;
        font-weight: 700;
        color: ${({ theme }) => theme.typeBoxText};
        border: 1.5px solid ${({ theme }) => theme.typeBoxText};
    }

    .btn:focus {
        background: transparent;
        font-weight: 600;
        border: 1.5px solid;
    }

    .toast-message {
        border-radius: 10px;
        height: 80%;
        color: ${({ theme }) => theme.typeBoxText};
        background: ${({ theme }) => theme.background};
        border: 1.5px solid;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        filter: contrast(90%);
    }

    .google-btn {
        width: 100%;
        margin: 1rem auto;
    }

    .table, .graph-user-page {
        margin: auto;
        width: 1000px;
    }

    .graph-user-page {
        margin-bottom: 2rem;
    }


    .table th {
        color: ${({ theme }) => theme.textColor};
        border-top: 1px solid;
        border-bottom: 1px solid;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
    }

    .table td {
        color: ${({ theme }) => theme.typeBoxText};
        text-align: center;
    }

    .user-profile{
        width: 50rem;
        margin: auto;
        margin-bottom: 2rem;
        display: flex;
        padding: 1rem 0;
        background: rgba(255, 255, 255, 0.7);
        color: black;
        border-radius: 20px;
        justify-content: space-around;
        align-items: center;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }
    .user{
        width: 60%;
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        border-right: 1px solid black;
    }
    .info{
        width: 60%;
        padding: 1rem 0;
        text-align: left;
    }
    .picture{
        width: 40%;
    }

    .total-tests {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .back-to-homepage {
        text-decoration: none;
        color: ${({ theme }) => theme.textColor};        
        font-weight: 600;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background: ${({ theme }) => theme.background};
        border: 1px solid;
        border-radius: 11px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;   
        padding: 0.4rem 0;
    }

    .back-to-homepage:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.typeBoxText};
        box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
        box-shadow: 0px 2px 5px ${({ theme }) => theme.typeBoxText};
    }

    .footer {
        padding: 0.3rem;
    }

    .center-of-screen {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .center-of-screen a {
        padding: 1rem;
    }

    .center-of-screen div {
        font-size: 1.5rem;
        font-weight: 600;
    }

    .motivation-quote {
        margin: auto;
        max-width: 1000px;
        font-size: 1.5rem;
        font-weight: 600;
        color: ${({ theme }) => theme.typeBoxText};
        margin-bottom: 1.5rem;
        border-top: 1px solid;
        border-bottom: 1px solid;
        padding: 0.2rem;
    }
    
    .links {
        display: flex;
        gap: 0.7rem;
    }

    .links a {
        text-decoration: none;
        color: ${({ theme }) => theme.typeBoxText};
        &:hover{
            color: ${({ theme }) => theme.textColor};
        }
    }

    // Media Quries

    @media (max-width: 1048px) {
        .type-box {
            height: auto;
            width: 900px;
        }

        .upper-menu {
            font-size: 1.5rem;
            width: 900px;
            padding: 0.5rem;
        }

        .header {
            width: 900px;
        }

        .stats-box {
            width: 100%;
            padding: 1rem;
        }

        .footer {
            width: 900px;
        }
    }

    @media (max-width: 998px) {
        .canvas{
            padding: 1rem;
            gap: 1rem;
        }

        .type-box {
            height: auto;
            width: 820px;
        }
        .upper-menu {
            width: 820px;
        }

        .header {
            width: 820px;
        }

        .footer {
            width: 820px;
        }

        .table {
            width: 100%;
            overflow-x:auto;
        }
    }

    @media (max-width: 650px) {

        * {
        font-size: 90%;
        }

        .canvas{
            grid-template-row: 1fr 0.7fr 1fr;
            gap: 2rem;
        }

        .type-box {
            width: 100vw;
            height: 600px;
        }

        .words {
        }

        .upper-menu {
            width: 100vw;
            flex-direction: column-reverse;
            gap: 1rem;
        }

        .stats-box {
            width: 800px;
            padding: 1rem;
        }

        .header {
            width: 100vw;
            flex-direction: column;
            gap: 1rem;
        }

        .footer {
            width: 100vw;
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;
            gap: 3rem;
        }

        .css-1ph7lfg-control, .css-cs1px1-control {
            width: 100px;
        }

        .themeButton {
            font-size: 1.2rem;
            flex-direction: column;
        }

        .user-profile {
            flex-direction: column;
            width: 50%; 
            padding: 1rem 2rem;
        }

        .user {
            border: none;
            text-align: center;
            margin-inline: auto;
            font-size: 2rem;
        }

        .info {
            width: 100%;
            text-align: center;
        }
        
        .total-tests {
            text-align: center;
            font-size: 1.5rem;
        }

        .motivation-quote {
            width: 100%;
            font-size: 1.7rem;
        }
        
        .picture {
            display: none;
        }

        .table {
            width: 100%;
            overflow-x:auto;
        }

        .table th, .table td {
            font-size: 1.7rem;
        }

        .stats-box {
            width: 100%;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
        }

        .left-stats {
            width: 100vw;
        }

        .right-stats {
            width: 100vw;
        }
    }
`;
