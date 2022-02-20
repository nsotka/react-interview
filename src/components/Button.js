import React from 'react';

export default function Button(props) {
    const {
        action,
        classes,
        text,
        type,
    } = props;

    return (
        <button
            className={classes}
            onClick={action}
            type={type}
        >
            {text}
        </button>
    )
}
