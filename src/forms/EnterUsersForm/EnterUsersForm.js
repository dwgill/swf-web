import React from 'react';
import { Field, FieldArray, reduxForm, arrayPush } from 'redux-form';
import classnames from 'classnames';
import bulma from 'bulma.css';
import { nth, dropRight } from 'lodash';

import UserField from './UserField';
import UsersFields from './UsersFields';

import validateUserInput from './validations/userEntryValidation';

const userFieldsArrayName = 'users';
const formName = 'userEntry';

const withoutLastEmptyUser = (values) => (console.log(values) || {
	...values,
	users: values.users.length > 1 && !nth(values.users, -1) ? dropRight(values.users) : values.users,
});

const handleChange = ({ users }, dispatch) => {
	if (users.length > 0 && nth(users, -1) !== '') {
		dispatch(arrayPush(formName, userFieldsArrayName, ''));
	}
};

const EnterUsersForm = ({reset, pristine, submitting, handleSubmit}) => (
  <form onSubmit={handleSubmit}>
    <FieldArray name={userFieldsArrayName} component={UsersFields} />
    <div className={classnames(bulma.field, bulma.isGrouped, bulma.isGroupedCentered)}>
      <div className={bulma.control}>
        <input
          type='submit'
          className={classnames(bulma.button, bulma.isLarge, bulma.isDark)}
          disabled={submitting || pristine}
          value="Submit"
        />
      </div>
      <div className={bulma.control}>
        <input
            type='reset'
            className={classnames(bulma.button, bulma.isLarge)}
            disabled={submitting}
            onClick={reset}
            value="Reset"
        />
      </div>
    </div>
  </form>
);

export default reduxForm({
  form: formName,
  initialValues: {
    users: ['']
  },
  validate: validateUserInput,
  onChange: handleChange,
})(EnterUsersForm);
