import React, { useContext, useRef } from 'react'
import { TodosContext } from '../store/todos-context'
import classes from "./NewTodo.module.css"

const NewTodo: React.FC/* <{onAddTodo: (text: string) => void }> */ = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    const todosCtx = useContext(TodosContext)
    const submitHandler = (event: React.FormEvent ) => {
        event.preventDefault()

        const enteredText = todoTextInputRef.current!.value

        if(enteredText?.trim().length === 0){
            return
        }

        /* props.onAddTodo(enteredText) */
        todosCtx.addTodo(enteredText)
    }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor='text'>Todo text</label>
        <input type="text" id='text' ref={todoTextInputRef}/>
        <button>Add todo</button>
    </form>
  )
}

export default NewTodo