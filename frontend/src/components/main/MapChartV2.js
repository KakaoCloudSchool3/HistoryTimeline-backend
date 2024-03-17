import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Pin from "./Pin.js";
import MapTimeLineV2 from "./MapTimeLineV2.js";

function MapChartV2() {
    const [scrollY, setScrollY] = useState(window.scrollY);
    const [showTimeline, setShowTimeline] = useState(false);
    const [pins, setPins] = useState([
        { x: "30", y: "10" },
        //{ x: "10", y: "10" },
    ]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            if (window.scrollY > 800) {
                setShowTimeline(true);
            } else {
                setShowTimeline(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const mapBoxHeight = 1000;
    const maxScroll = mapBoxHeight - window.innerHeight;

    const mapBoxStyle = useSpring({
        top: scrollY <= maxScroll ? `${scrollY}px` : `${maxScroll}px`,
    });

    const westStyle = useSpring({
        top: scrollY <= maxScroll ? `${Math.min(scrollY, 5)}vw` : "5vw",
        left: scrollY <= maxScroll ? `${Math.min(scrollY + 6, 10)}vw` : "10vw",
    });

    const eastStyle = useSpring({
        top: scrollY <= maxScroll ? `${Math.min(scrollY, 5)}vw` : "5vw",
        right: scrollY <= maxScroll ? `${Math.min(scrollY + 5, 9)}vw` : "9vw",
    });

    const earthBoxStyle = useSpring({
        top: scrollY <= maxScroll ? `${Math.min(scrollY, 1)}vw` : "1vw",
        right: scrollY <= maxScroll ? `${Math.min(scrollY, 5)}vw` : "5vw",
        width:
            scrollY <= maxScroll
                ? `${50 - (scrollY / maxScroll) * 10}vw`
                : "40vw",
        height:
            scrollY <= maxScroll
                ? `${30 + (scrollY / maxScroll) * 10}vw`
                : "40vw",
        borderRadius:
            scrollY <= maxScroll
                ? `${5 + (scrollY / maxScroll) * 45}vw`
                : "40vw",
    });

    return (
        <div class="container">
            <div className="row" style={{justifyContent: "center"}}>
                <div
                    className="col-7"
                    style={{
                        maxWidth: "60vw",
                        width: "60vw",
                        height: `${mapBoxHeight}px`,
                        margin: "0 0 0 0",
                        position: "relative",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    <div
                        className="map"
                        style={{
                            zIndex: 1,
                            ...mapBoxStyle,
                            width: "40vw",
                            height: "40vw"
                        }}
                    >
                        <animated.img
                            src="./western.svg"
                            alt="west"
                            style={{
                                borderRadius: "5vw",
                                width: "15vw",
                                position: "absolute",
                                ...westStyle,
                            }}
                        />
                        <animated.img
                            src="./eastern.svg"
                            alt="east"
                            style={{
                                width: "30vw",
                                position: "absolute",
                                ...eastStyle,
                            }}
                        />
                        <div>
                            {pins.map((pin, index) => (
                                <Pin
                                    key={index}
                                    x={pin.x}
                                    y={pin.y}
                                    imageOffset={{ left: 0, top: 0 }}
                                    style
                                />
                            ))}
                        </div>
                    </div>

                    <div
                        className="earth"
                        style={{
                            width: "50vw",
                            height: "40vw",
                            borderRadius: "50%",
                            position: "absolute",
                            zIndex: 0,
                        }}
                    >
                        <animated.div
                            className="earthBox"
                            style={{
                                background: "#eaeafc",
                                position: "absolute",
                                borderRadius: "5vw",
                                width: "50vw",
                                height: "40vw",
                                ...earthBoxStyle,
                            }}
                        ></animated.div>
                    </div>
                </div>
                <div
                    className="col-5"
                    style={{
                        display: showTimeline ? "flex" : "none",
                        width:"20vw",
                        textAlign: "center"
                    }}
                >
                    <MapTimeLineV2 />
                </div>
            </div>
        </div>
    );
}

export default MapChartV2;