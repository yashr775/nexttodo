import { cookies } from "next/headers";
import React from "react";
import { Todoitem } from "./components/Servercomponents";

const fetchTodo = async (token) => {
    try {
        const res = await fetch(`${process.env.URL}/api/mytask`, {
            cache: "no-cache",
            headers: {
                cookie: `token-${token}`,
            },
        });

        const data = await res.json();

        if (!data.success) return [];
        return data.tasks;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const todos = async () => {
    const token = cookies();
    const tasks = await fetchTodo(token);

    return (
        <div>
            {tasks.map((task) => (
                <Todoitem
                    key={task._id}
                    title={task.title}
                    description={task.description}
                    id={task._id}
                    completed={task.completed}
                />
            ))}
        </div>
    );
};

export default todos;
