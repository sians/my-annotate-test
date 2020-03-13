import React, {useState} from 'react';
import PropTypes from 'prop-types';

import IconButton from '../IconButton/IconButton'
import { faArchive, faTrashAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Task({ task: { id, text, completed, selectedTask }, onUpdateTask, onDeleteTask }) {

    const [isHovering, setIsHovering] = useState(false);
    const handleMouseHover = () => { 
        setIsHovering(!isHovering)
    }

    const selected = selectedTask === id ? true : false;

    const colourTheme = {light: "rgb(255, 220, 220)", dark: "rgb(248, 88, 88)"}
  
    const itemComplete = completed ? "completed" : "";
    const itemSelected = selected ? "selected" : ""

    return (
    <div className={`list-item ${itemComplete} ${itemSelected}`}
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}>

        <input type="text" value={text} readOnly={true} placeholder="Input title"/>

        { (isHovering || selected) &&
            <div className="action-buttons" onClick={event => event.stopPropagation()}>
                {!completed && (
                    <IconButton type="check" faIcon={faCheck} action={() => onUpdateTask(id)}/>
                )}

                {completed && (
                    <IconButton type="times" faIcon={faTimes} action={() => onUpdateTask(id)}/>
                )}            
                
                <IconButton type="trash" faIcon={faTrashAlt} action={() => onDeleteTask(id)}/>
            </div>
        }

    </div>
  );
}

Task.propTypes = {
    task: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      selectedTask: PropTypes.number
    }),
    onUpdateTask: PropTypes.func,
    onDeleteTask: PropTypes.func,
  };