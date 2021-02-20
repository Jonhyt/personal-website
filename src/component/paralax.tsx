import React from "react";

export const Paralax: React.FC = () => {
    return (
        <div style={style}>
            <div style={{ flex: 1, background: "#f0f" }}></div>
            <div style={{ flex: 1, background: "#0f0" }}></div>
            <div style={welcomeContainer}>
                <div style={{ background: "#fff", width: 500, height: 500 }}></div>
            </div>
        </div>
    );
};

const style: React.CSSProperties = {
    display: "flex",
    width: "100%",
    height: "100%",
    // background: "#f80",
};

const welcomeContainer: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
};
