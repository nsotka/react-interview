import React, { useState } from 'react';
import './App.css';
import AddTaskBar from './components/AddTaskBar';
import TaskItem from './components/TaskItem';



const initTodos = [
    { id: 1, name: 'Go to the supermarket', complete: false },
    { id: 2, name: 'Call Alice', complete: false },
    { id: 3, name: 'Ask Alice to call Bob', complete: false },
    { id: 4, name: 'Do the dishes', complete: false },
    { id: 5, name: 'Change car tyres', complete: false }
];

function App() {
    const [todos, setTodos] = useState([...initTodos]);

    const generateNewId = () => {
        const todoIds = todos.map((task) => task.id);
        const maxId = todoIds.length > 0 ? Math.max(...todoIds) : 0;
        return maxId + 1;
    }

    const onSubmit = (event, taskName) => {
        event.preventDefault();

        var newTodos = todos.slice();
        newTodos.push({
            id: generateNewId(),
            name: taskName,
            complete: false
        });

        setTodos(newTodos);
    }

    const changeTaskStatus = (id) => {
        const todoItems = todos.map((item) => {
            item.id === id && (item.complete = !item.complete);
            return item;
        })

        setTodos(todoItems);
    }

    const onRemoveClick = (id) => {
        const filteredTasks = todos.filter((task) => task.id !== id)

        setTodos(filteredTasks);
    }

    const todoItems = () => {
        var retVal = todos.map((todo) => (
            <TaskItem
                key={todo.id}
                todoItem={todo}
                onRemoveClick={onRemoveClick}
                onStatusClick={changeTaskStatus}
            />
        ))

        return retVal;
    };

    return (
        <div>
            {todoItems()}
            <AddTaskBar
                onSubmit={onSubmit}
            />
        </div>
    );
}

export default App;
