// import React from 'react';
// import PropTypes from 'prop-types';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArchive, faTrashAlt, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

// export default function TaskActions({ taskActions: { selected, completed }, onUpdateTask, onDeleteTask }) {
//     const trashIcon = <FontAwesomeIcon className="icon" icon={faTrashAlt}/>
//     const checkIcon = <FontAwesomeIcon className="icon" icon={faCheckCircle}/>
//     const uncheckIcon = <FontAwesomeIcon className="icon" icon={faTimesCircle}/>

//     const colourTheme = {light: "rgb(255, 220, 220)", dark: "rgb(248, 88, 88)"}
  
//     const itemComplete = completed === "TASK_COMPLETE" ? "completed" : "";
//     const itemSelected = selected ? "selected" : ""

//     return (

//         <div className="actions" onClick={event => event.stopPropagation()}>
//             {completed !== 'TASK_COMPLETED' && (
//                 <a onClick={() => onUpdateTask(id)}>
//                     {checkIcon}        
//                 </a>
//             )}

//             {completed === 'TASK_COMPLETED' && (
//                 <a onClick={() => onUpdateTask(id)}>
//                     {uncheckIcon}
//                 </a>
//             )}            
            
//             <a onClick={() => onDeleteTask(id)}>
//                 {trashIcon}
//             </a>
//         </div>

//   );
// }

// TaskActions.propTypes = {
//     taskActions: PropTypes.shape({
//       selected: PropTypes.bool,
//       completed: PropTypes.string.isRequired
//     }),
//     onUpdateTask: PropTypes.func,
//     onDeleteTask: PropTypes.func,
//   };