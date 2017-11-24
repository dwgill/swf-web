import React from 'react';
import { Field } from 'redux-form';

import UserField from './UserField';

import styles from './UsersFields.css';

const UsersFields = ({fields}) => (
  <ul className={styles.userEntryList}>
    {fields.map((user, index) => 
      <li key={index} className={styles.userEntryListItem}>
        <Field
          name={user}
          type='text'
          component={UserField}
        />
      </li>
    )}
  </ul>
);

export default UsersFields;
