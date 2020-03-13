import React, {useState} from 'react';
import PropTypes from 'prop-types';

import TaskForm from '../TaskForm/TaskForm';
import Task from '../Task/Task';

function Panel({ name, loading, tasks, onUpdateTask, onDeleteTask }) {
  const [selectedTask, setSelectedTask] = useState(null);

  const events = {
    onUpdateTask,
    onDeleteTask,
    setSelectedTask,
  };

  if (loading) {
    return <div className="panel">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="panel">empty</div>;
  }

  return (
    <div className="panel">
      <h5>{name}</h5>
      {/* <TaskForm /> */}
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

export default Panel;

Panel.propTypes = {
    name: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
    onUpdateTask: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
}

Panel.defaultProps = {
    loading: false,
}