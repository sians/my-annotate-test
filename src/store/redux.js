
// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from 'redux';

// The actions are the "names" of the changes that can happen to the store
export const actions = {
  UPDATE_TASK: 'UPDATE_TASK',
};

// The action creators bundle actions with the data required to execute them
export const updateTask = id => ({ type: actions.UPDATE_TASK, id });

// All our reducers simply change the state of a single task.
function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      ),
    };
  };
}

// The reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_TASK:
      return taskStateReducer('UPDATE_TASK')(state, action);
    default:
      return state;
  }
};

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultTasks = [
  { id: '1', text: 'Something', completed: false },
  { id: '2', text: 'Something more', completed: false },
  { id: '3', text: 'Something else', completed: true },
  { id: '4', text: 'Something again', completed: false },
];

// We export the constructed redux store
export default createStore(reducer, { tasks: defaultTasks });