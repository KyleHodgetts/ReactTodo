import React from 'react';
import moment from 'moment';

export default class Todo extends React.Component {
  render = () => {
    let { id, text, completed, createdAt, completedAt } = this.props;
    let renderDate = () => {
      let message = 'Created at ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed at ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }
    return (
      <div onClick={() => { this.props.onToggle(id); } }>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>

      </div>
    );
  }
}
