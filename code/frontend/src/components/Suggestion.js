import React from "react";
import Card from "./Card";

const Suggestion = ({ suggestion }) => {
    return (
        <Card>
            <div className="w-full h-full flex items-center justify-around">
        <span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center">
          Suggestion:
        </span>
                <span
                    className={`text-2xl xl:text-4xl 2xl:text-5xl flex items-center ${
                        suggestion <= -1 ? "text-red-500" : suggestion > 1 ? "text-lime-500" : "text-orange-500"
                    }`}
                >
          {suggestion <= -1 ? "SELL" : suggestion > 1 ? "BUY" : "HOLD"}
        </span>
            </div>
        </Card>
    );
};

export default Suggestion;
