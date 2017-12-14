import React from 'react';
import { Field } from 'redux-form';
import classnames from 'classnames';
import bulma from '../../bulma.scss';

import UserField from './UserField';

import styles from './UsersFields.scss';

const UsersFields = ({ fields, meta: { error, dirty } }) => (
  <ul className={styles.userEntryList} className={styles.userEntryListItem}>
    {error &&
      dirty && (
        <li key="error" className={styles.userEntryListItem}>
          <p className={classnames(bulma.help, bulma.isDanger)}>{error}</p>
        </li>
      )}
    {fields.map((user, index) => (
      <li key={index} className={styles.userEntryListItem}>
        <Field name={user} type="text" component={UserField} />
      </li>
    ))}
  </ul>
);

export default UsersFields;
