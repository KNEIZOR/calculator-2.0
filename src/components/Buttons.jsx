import React from "react";
import "../style/buttons.css";

const Buttons = (props) => {
    return props.isActive ? (
        <div className="numbers__wrapper">
            <div className="numbers">
                <div className="cell-numbers">
                    {props.numbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => props.update(number)}
                        >
                            {number}
                        </button>
                    ))}
                    <button onClick={() => props.change("clear")}>clear</button>
                    <button onClick={() => props.change("=")}>=</button>
                </div>
            </div>
            <div className="operators">
                {props.operators.map((operator) => (
                    <button
                        key={operator}
                        onClick={() => props.change(operator)}
                    >
                        {operator}
                    </button>
                ))}
                
            </div>
        </div>
    ) : (
        <div className="numbers__wrapper dark">
            <div className="numbers">
                <div className="cell-numbers">
                    {props.numbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => props.update(number)}
                        >
                            {number}
                        </button>
                    ))}
                    <button onClick={() => props.change("clear")}>clear</button>
                    <button onClick={() => props.change("=")}>=</button>
                </div>
            </div>
            <div className="operators">
                {props.operators.map((operator) => (
                    <button
                        key={operator}
                        onClick={() => props.change(operator)}
                    >
                        {operator}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Buttons;
