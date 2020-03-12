import React from 'react';

export default function Task({ task: { id, text, completed }, onArchiveTask, onCompleteTask }) {
  return (
    <div className="list-item">
      <input type="text" value={text} readOnly={true} />
    </div>
  );
}