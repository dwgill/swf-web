import React from 'react';
import bulma from 'bulma.css';
import classnames from 'classnames';
import { FaUser, FaUserTimes } from 'react-icons/lib/fa';
import Icon from '../../components/Icon';

import customStyles from './UserField.css';
import colors from '../../colors.css';

const styles = {
  ...customStyles,
  control: classnames(bulma.control, bulma.hasIconsLeft),
  errorMsg: classnames(bulma.help, bulma.isDanger),
  textInput: classnames(bulma.input, bulma.isMedium),
  iconBox: classnames(bulma.icon, bulma.isMedium, bulma.isLeft),
  // icon: classnames(fa.fa, fa.faUser),
};

const formPlaceholderText = 'steamcommunity.com/...';

const UserField = ({
  input,
  meta: { touched, pristine, error, invalid, active },
}) => {
  return (
    <div className={bulma.field}>
      <div className={styles.control}>
        <Icon
          size="l"
          icon={touched && invalid ? FaUserTimes : FaUser}
          className={styles.fieldIcon}
          color={touched && invalid ? colors.colorDanger : ''}
          left
        />
        <input
          {...input}
          type="text"
          className={classnames(styles.textInput, {
            [bulma.isDanger]: touched && invalid,
            [bulma.isFocus]: active,
          })}
          placeholder={formPlaceholderText}
        />
      </div>
      {touched && invalid && <p className={styles.errorMsg}>{error}</p>}
    </div>
  );
};

export default UserField;
