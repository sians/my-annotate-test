import React, { useState } from "react";
import PropTypes from 'prop-types';

import TextField from '../TextField/TextField';

import IconButton from '../IconButton/IconButton'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const TaskForm =  ({ show, createNewTask }) => {
    const [value, setValue] = useState('');

    const handleChangeEvent = (e) => {
        setValue(e.target.value);
    }

    if (value.length > 0) { 
        createNewTask(value); 
        setValue('');
    }

    return (
        <form className="task-form">
            <TextField styleType="task-text-field" type="text"/>
            <IconButton type="check" faIcon={faPlus}/>
        </form>
    )
}

export default TaskForm;