// import React from 'react';
// import { action } from '@storybook/addon-actions';

// import TaskActions from './TaskActions';

// export default {
//   component: TaskActions,
//   title: 'TaskActions',
//   // Our exports that end in "Data" are not stories.
//   excludeStories: /.*Data$/,
// };

// export const taskActionsData = {
//   selected: false,
// };

// export const actionsData = {
//   onUpdateTask: action('onUpdateTask'),
//   onDeleteTask: action('onDeleteTask')
// };

// export const Default = () => {
//   return <TaskActions taskActions={{ ...taskActionsData }} {...actionsData} />;
// };

// export const SelectedIncomplete = () => {
//     return <TaskActions taskActions={{ ...taskActionsData, selected: true}} {...actionsData} />;
// };

// export const SelectedCompleted = () => (
//   <TaskActions taskActions={{ ...taskActionsData, selected: true }} {...actionsData} />
// );

// // export const Archived = () => (
// //   <Task task={{ ...taskData, archived: 'TASK_ARCHIVED' }} {...actionsData} />
// // );