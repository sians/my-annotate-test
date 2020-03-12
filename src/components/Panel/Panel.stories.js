import React from 'react';

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

// export const withPinnedTasksData = [
//   ...defaultTasksData.slice(0, 5),
//   { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
// ];

export const Default = () => <Panel tasks={defaultTasksData} {...actionsData} />;

// export const WithPinnedTasks = () => <Panel tasks={withPinnedTasksData} {...actionsData} />;

export const Loading = () => <Panel loading tasks={[]} {...actionsData} />;

export const Empty = () => <Panel tasks={[]} {...actionsData} />;