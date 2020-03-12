import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive } from '@fortawesome/free-solid-svg-icons'

export default function Task({ task: { id, text, completed }, onArchiveTask, onCompleteTask }) {
    const archive = <FontAwesomeIcon icon={faArchive} style={{opacity: 0.3}}/>
  
    return (
    <div className={`list-item ${completed}`}>
        <input type="text" value={text} readOnly={true} placeholder="Input title"/>
        {archive}
    </div>
  );
}