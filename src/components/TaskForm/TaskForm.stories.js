import React from 'react';

import TaskForm from './TaskForm';


export default {
  component: TaskForm,
  title: 'TaskForm',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const Default = () => <TaskForm />;
