import React from 'react';
import bulma from 'bulma.css';
import classnames from 'classnames';

const formPlaceholderText = 'steamcommunity.com/...';

const UserField = ({
  input,
  meta: {
    touched,
    error,
    invalid,
    active,
  }
}) => (
  <div className={bulma.field}>
    <div className={bulma.control}>
      <input {...input}
        type='text'
        className={classnames(
          bulma.input,
          bulma.isMedium,
          {
            [bulma.isDanger]: touched && invalid,
            [bulma.isFocus]: active,
          }
        )}
        placeholder={formPlaceholderText}
      />
    </div>
    { touched && invalid && <p className={classnames(bulma.help, bulma.isDanger)}>{error}</p> }
  </div>
);

export default UserField;
