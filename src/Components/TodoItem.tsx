import React from "react";
import "./TodoItem.scss"

interface TodoItemProps {
    todo: string;
    completed: boolean;
    toggleComplete: () => void;
    deleteTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({todo, completed, toggleComplete, deleteTodo}) => {
    return (
        <div>
            <div>{todo}</div>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}

export default TodoItem;
