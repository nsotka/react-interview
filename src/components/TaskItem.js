import React from 'react'
import Button from './Button';

export default function TaskItem(props) {
    const {
        onRemoveClick,
        onStatusClick,
        todoItem
    } = props;

    var text;

    if (todoItem.complete === true) {
        text = 'Complete';
    } else {
        text = 'Incomplete';
    }

    return (
        <div
            className={
                `wrapper
                ${todoItem.complete ? "complete" : "incomplete"}`
            }
        >
            <h3>{todoItem.name}</h3>
            <Button
                action={() => onStatusClick(todoItem.id)}
                classes="btn btn-complete"
                text={text}
                type="button"
            />
            <Button
                action={() => onRemoveClick(todoItem.id)}
                classes="btn btn-remove"
                text="Remove"
                type="button"
            />
        </div>
    )
}
