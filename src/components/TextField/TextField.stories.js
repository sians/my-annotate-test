import React from 'react';

import TextField from './TextField';

export default {
  component: TextField,
  title: 'TextField',
  decorators: [story => <div style={{ padding: '3rem', backgroundColor: "rgb(255, 220, 220)" }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const Default = () => <TextField styleType={["task-text-field"]} />;
