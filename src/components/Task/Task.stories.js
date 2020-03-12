import React from 'react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INCOMPLETE',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onCompleteTask: action('onCompleteTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const Default = () => {
  return <Task task={{ ...taskData }} {...actionsData} />;
};

// export const Hover = () => {
//     return <Task task={{ ...taskData}} {...actionsData} />;
// }

export const Completed = () => (
  <Task task={{ ...taskData, state: 'TASK_COMPLETED' }} {...actionsData} />
);

export const Archived = () => (
  <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
);