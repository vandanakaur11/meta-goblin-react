import React, { useState, useRef, useEffect } from "react";
import "./Timer.css";
import timerText1 from "./../../Assets/Images/SVG/Fonts/timerText1.png";
import timerText2 from "./../../Assets/Images/SVG/Fonts/timerText2.png";
import timerText3 from "./../../Assets/Images/SVG/Fonts/timerText3.png";
import timerText4 from "./../../Assets/Images/SVG/Fonts/timerText4.png";
import timerText5 from "./../../Assets/Images/SVG/Fonts/timerText5.png"
import timerText6 from "./../../Assets/Images/SVG/Fonts/timerText6.png"
import timerText7 from "./../../Assets/Images/SVG/Fonts/timerText7.png"

const Timer = () => {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date("October 15, 2022 00:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = countdownDate - now;
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const Hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const Minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            if (difference < 0) {
                // stopTimer
                clearInterval(interval.current);
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(Hours);
                setTimerMinutes(Minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

    return (
        <div className="timerContainer">
            {/* <div className="bold-text">OpenSea NFT Marketplace</div> */}
            <img className="textImg2" alt="" src={timerText7} />
            <div className="timer">
                <div>
                    <div className="numbers">{timerDays}</div>
                    {/* <br /> */}
                    <div className="duration">Days</div>
                </div>
                <div>
                    <div className="numbers">{timerHours}</div>
                    {/* <br /> */}
                    <div className="duration">Hours</div>
                </div>
                <div>
                    <div className="numbers">{timerMinutes}</div>
                    {/* <br /> */}
                    <div className="duration">Minutes</div>
                </div>
                <div>
                    <div className="numbers">{timerSeconds}</div>
                    {/* <br /> */}
                    <div className="duration">Seconds</div>
                </div>
            </div>
            {/* <div className="bold-text">October 15th 12pm EST</div> */}
            <img className="textImg1" alt="" src={timerText1} />
        </div>
    );
};

export default Timer;
