import React from 'react';
import classnames from 'classnames';
import { FaUser, FaUserTimes } from 'react-icons/lib/fa';
import Icon from '../../components/Icon';

import styles from './UserField.scss';

const formPlaceholderText = 'steamcommunity.com/...';

const UserField = ({
  input,
  meta: { touched, pristine, error, invalid, active },
}) => {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.field}>
        <Icon
          size="l"
          icon={touched && invalid ? FaUserTimes : FaUser}
          className={styles.fieldIcon}
          color={touched && invalid ? styles.errorMsgColor : null}
          left
        />
        <input
          {...input}
          type="text"
          className={classnames(styles.fieldInput, {
            [styles.fieldInputError]: touched && invalid,
            [styles.fieldInputFocus]: active,
          })}
          placeholder={formPlaceholderText}
        />
      </div>
      {touched && invalid && <p className={styles.errorMsg}>{error}</p>}
    </div>
  );
};

export default UserField;
