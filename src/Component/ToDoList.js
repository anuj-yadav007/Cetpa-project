import React, { useState } from 'react'
import { add_customer, allData } from './DisplayToDo';


function TodoList() {
    const [data, setData] = useState(['']);
    const [newData, setNewData] = useState('');

    const handlerData = (e) => {
        setNewData(e.target.value);
    };
    const add_data = () => {
        add_customer(newData);
        setData([...allData]);
        setNewData('')//clear the input field after fill the value.
    }
    return (
        <>
            <h1>ToDo List...?</h1>
            <input type='text' value={newData} onChange={handlerData} placeholder='Please Enter'></input>
            <input type='button' onClick={add_data} value="Add"></input>

            <ul>{
                data?.map((e) => {
                    return (
                        <li key={e.id}>
                            {e.customer}
                        </li>
                    )
                })

            }</ul>

        </>
    )
}

export default TodoList;