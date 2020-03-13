import React from 'react';

import IconButton from './IconButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faTrashAlt, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const trashIcon = <FontAwesomeIcon className="icon" icon={faTrashAlt}/>
const checkIcon = <FontAwesomeIcon className="icon" icon={faCheckCircle}/>
const uncheckIcon = <FontAwesomeIcon className="icon" icon={faTimesCircle}/>

export default {
  component: IconButton,
  title: 'IconButton',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

// export const actionsData = {
//     onUpdateTask: action('onUpdateTask'),
//     onDeleteTask: action('onDeleteTask')
//   };

export const Default = () => <IconButton icon={trashIcon} type="trash" faIcon={faTrashAlt} />;

// export const Loading = () => <IconButton loading tasks={[]} {...actionsData} />;

// export const Empty = () => <IconButton tasks={[]} {...actionsData} />;