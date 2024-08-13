import { useRef, useState } from "react";
import Buttons from "./components/Buttons";
import "./style/style.css";

function App() {
    const calculator = useRef();
    const [isActive, setIsActive] = useState(true);
    let [number, setNumber] = useState("");
    let [number2, setNumber2] = useState("");
    let [result, setResult] = useState("0");
    let [oper, setOper] = useState("");

    function theme(i) {
        setIsActive(!isActive);
        if (isActive) {
            calculator.current.style.background = "#232325";
        } else {
            calculator.current.style.background = "#fff";
        }
    }

    const condition =
        result.includes("+") ||
        result.includes("-") ||
        result.includes("*") ||
        result.includes("/");

    const update = (value) => {
        if (result === "0") {
            result = "";
        }

        if (
            !result.includes("+") &&
            !result.includes("-") &&
            !result.includes("*") &&
            !result.includes("/")
        ) {
            setNumber((number += `${value}`));
        } else {
            setNumber2((number2 += `${value}`));
        }
        setResult((result += `${value}`));
    };

    function sum() {
        if (condition) {
            resultNum();
        }
        setResult((result += " + "));
    }

    function min() {
        if (condition) {
            resultNum();
        }
        setResult((result += " - "));
    }

    function mul() {
        if (condition) {
            resultNum();
        }
        setResult((result += " * "));
    }

    function del() {
        if (condition) {
            resultNum();
        }
        setResult((result += " / "));
    }

    function resultNum() {
        if (result.includes("+")) {
            setResult((result = `${+number + +number2}`));
        }

        if (result.includes("-")) {
            setResult((result = `${+number - +number2}`));
        }

        if (result.includes("*")) {
            setResult((result = `${+number * +number2}`));
        }

        if (result.includes("/")) {
            setResult((result = `${+number / +number2}`));
        }

        setNumber((number = result));
        setNumber2((number2 = 0));
    }

    const change = (operator) => {
        if (operator === "+") {
            sum();
            setOper((oper = "+"));
        }

        if (operator === "-") {
            min();
            setOper((oper = "-"));
        }

        if (operator === "*") {
            mul();
            setOper((oper = "*"));
        }

        if (operator === "/") {
            del();
            setOper((oper = "/"));
        }

        if (operator === "=") {
            resultNum();
        }

        if (operator === "clear") {
            setResult((result = "0"));
            setNumber((number = ""));
            setNumber2((number2 = ""));
            setOper((oper = ""));
        }
    };

    return (
        <div className="App">
            <div className="calculator" ref={calculator}>
                <div className="top-el"></div>
                {isActive ? (
                    <header>Calculator</header>
                ) : (
                    <header className="dark">Calculator</header>
                )}
                {isActive ? (
                    <div className="answer">{result}</div>
                ) : (
                    <div className="answer dark">{result}</div>
                )}

                <Buttons
                    isActive={isActive}
                    update={update}
                    change={change}
                    numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
                    operators={["+", "-", "*", "/"]}
                />
                <button className="theme" onClick={(i) => theme(i)}>
                    {isActive ? (
                        <i className="fa-regular fa-moon"></i>
                    ) : (
                        <i className="fa-regular fa-lightbulb dark"></i>
                    )}
                </button>
            </div>
        </div>
    );
}

export default App;
