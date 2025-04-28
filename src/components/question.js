import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import '../index.css';

function Question({ title, info }) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="qusetion">
            <header>
                <h4 className="title">{title}</h4>
                <button onClick={() => setShowInfo(!showInfo)} className="toggle-btn">
                    <span className={`icon ${showInfo ? 'show' : ''}`}>
                        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </span>
                </button>
            </header>
            <p className={showInfo ? "show" : ""}>{info}</p>
        </div>
    );
}

export default Question;