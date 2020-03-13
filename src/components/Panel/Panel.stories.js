import React from 'react';

// import Panel from './Panel';
import Panel from './Panel';
import { taskData, actionsData } from '../Task/Task.stories';

export default {
  component: Panel,
  title: 'Panel',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const defaultTasksData = [
  { ...taskData, id: '1', text: 'Task 1 with some words', completed: false },
  { ...taskData, id: '2', text: 'Task 2 wasnt done', completed: false },
  { ...taskData, id: '3', text: 'Task 3 and there are lots of words', completed: true },
  { ...taskData, id: '4', text: 'Task 4', completed: false },
  { ...taskData, id: '5', text: 'Task 5 lookin alive', completed: true },
  { ...taskData, id: '6', text: 'Task 6 biscuit', completed: false },
];

export const Default = () => <Panel name="soon" tasks={defaultTasksData} {...actionsData} />;

export const Loading = () => <Panel loading tasks={[]} {...actionsData} />;

export const Empty = () => <Panel tasks={[]} {...actionsData} />;

// export const Default = () => <Panel name="soon" tasks={defaultTasksData} {...actionsData} />;

// export const Loading = () => <Panel loading tasks={[]} {...actionsData} />;

// export const Empty = () => <Panel tasks={[]} {...actionsData} />;