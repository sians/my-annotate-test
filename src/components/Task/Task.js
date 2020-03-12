import React, {useState} from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faTrashAlt, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default function Task({ task: { id, text, completed, selectedTask }, onUpdateTask, onDeleteTask }) {
    const trashIcon = <FontAwesomeIcon className="icon" icon={faTrashAlt}/>
    const checkIcon = <FontAwesomeIcon className="icon" icon={faCheckCircle}/>
    const uncheckIcon = <FontAwesomeIcon className="icon" icon={faTimesCircle}/>

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
            <div className="actions" onClick={event => event.stopPropagation()}>
                {!completed && (
                    <a onClick={() => onUpdateTask(id)}>
                        {checkIcon}        
                    </a>
                )}

                {completed && (
                    <a onClick={() => onUpdateTask(id)}>
                        {uncheckIcon}
                    </a>
                )}            
                
                <a onClick={() => onDeleteTask(id)}>
                    {trashIcon}
                </a>
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