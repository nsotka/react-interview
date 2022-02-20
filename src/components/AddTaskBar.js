import React, { useState } from 'react';
import Button from './Button';

export default function AddTaskBar(props) {
    const { onSubmit, } = props;

    const [taskName, setTaskName] = useState('');

    const handleTaskNameChange = (event) => {
        const { value } = event.target;

        setTaskName(value);
    }

    const handleSubmit = (event) => {
        setTaskName('');
        onSubmit(event, taskName);
    }

    return (
        <form
            className="wrapper add-task-bar"
            style={{ gridTemplateColumns: '7fr 2fr' }}
            onSubmit={handleSubmit}
        >
            <input
                placeholder="Add new todo"
                value={taskName}
                onChange={handleTaskNameChange}
            />
            <Button
                classes="btn btn-success"
                text="Submit"
                type="submit"
            />
        </form>
    )
}
