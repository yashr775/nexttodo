"use client"

import React, { useState } from 'react'

const addTodoForm = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const submitHandler = () => {

    }


    return (
        <div className="login">
            <section>
                <form onSubmit={submitHandler}>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Task Title"
                    />
                    <input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text"
                        placeholder="Task Description"
                    />
                    <button type="submit">Add Task</button>
                </form>
            </section>
        </div>
    )
}

export default addTodoForm