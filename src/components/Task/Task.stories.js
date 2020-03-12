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
  selected: false,
  completed: false,
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onUpdateTask: action('onUpdateTask'),
  onDeleteTask: action('onDeleteTask')
};

export const Default = () => {
  return <Task task={{ ...taskData, text: 'some text' }} {...actionsData} />;
};

export const Completed = () => (
    <Task task={{ ...taskData, text: 'some text', completed: true }} {...actionsData} />
);

export const SelectedIncomplete = () => {
    return <Task task={{ ...taskData, text: 'some text'}} {...actionsData} />;
};

export const SelectedCompleted = () => (
  <Task task={{ ...taskData, text: 'some text', completed: true }} {...actionsData} />
);

