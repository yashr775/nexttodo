import React from "react";

export const Todoitem = ({ title, description }) => {
    return (
        <div className="todo">
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <div></div>
        </div>
    );
};


