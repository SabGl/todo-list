import React, {useState} from "react";
import TodoItem from "./TodoItem";
import "./TodoList.scss"


const TodoList: React.FC= () => {
    const [todos, setTodos] = useState<{ text: string, completed: boolean }[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const addNewTodo = () => {
        if (newTodo.trim() !== ''){
            setTodos([...todos, {text:newTodo, completed:false}]);
            setNewTodo('');
        }
    }

    const toggleComplete = (index:number) => {
        const updateTodos = todos.map((todo, i) =>
            i === index ? {...todo, completed: !todo.completed} : todo);
        setTodos(updateTodos);
    }

    const removeTodo = (index:number) => {
        const updatedTodo = todos.filter((_, i) => i !== index);
        setTodos((updatedTodo))
    }

    return (
        <>
        <div className={"todo-list"}>
            <input
                type={"text"}
                value={newTodo}
                onChange={(e) => {
                    setNewTodo(e.target.value)
                }}
                onKeyPress={(e) => e.key === 'Enter' && addNewTodo()}
                placeholder="Add a new task..."
            />
        </div>
            <div className={"button"}>
                <button onClick={addNewTodo}>Add</button>
            </div>
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo.text} completed={todo.completed} toggleComplete={() => toggleComplete(index)} deleteTodo={() => removeTodo(index)} />
            ))}
        </>
    )
}

export default TodoList;
