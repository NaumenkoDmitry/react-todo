import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { TODO_SCHEMA } from '../utils/validationSchremas';
import  './TodoList.css'

const data =[
  {
    id:1,
    body:'tuff',
    isDone: false
  },
];

const TodoList = () => {
  const [tasks, setTask] = useState(data);
  const addTask =(text)=>{
    const newTask ={
      id:Date.now(),
      isDone:false,
      body:text
    }
    const newTasks=[...tasks,newTask];
    setTask(newTasks);
  }
  const deleteTask = (parametrList)=>{
    //filter
  }
  const toggleCompletion=()=>{

  }
  const submitHandler=(values,formikBag)=>{
    const {taskText} = values;
    addTask(taskText);
    /* formikBag.resetForm(); */
  }
  return (
    <div>
     <h1>TodoList</h1>
     <Formik validationSchema={TODO_SCHEMA} initialValues={
       {taskText:''}
       } >
       <Form>
         <Field name="taskText" placeholder="enter Task"/>
         <button type="submit" onClick={submitHandler}>OK</button>
         <button type="submit" onClick={deleteTask}>Delete</button>
         <ErrorMessage name="taskText">
            {(message)=><div style={{color:'red'}}>{message}</div>}
         </ErrorMessage>
       </Form>
     </Formik>
     <ul>
       {tasks.map((task)=>{
         return <div className="listJson">
           <p>{JSON.stringify(task.id)}</p>
           <p>{(task.body)}</p>
           <p>{JSON.stringify(task.isDone)}</p>
           </div>
       })}
     </ul>
    </div>
  );
}

export default TodoList;
