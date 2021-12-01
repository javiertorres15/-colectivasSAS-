import React from 'react';
import TodoItem from './todo-item';

const TodoList = ({items})=>{
    return (
        <div>
            <p>Todo List</p>
            <ul>
                {
                    items.map((e)=>{
                        <TodoItem title={e.text} style={{color: e.color}}/>
                    })
                    //items.map(e => <TodoItem title="Barrer casa" style={{color: 'red'}}/>)
                }
            </ul>
        </div>
    );
};

export default TodoList;