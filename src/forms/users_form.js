import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import validateUserInput from './validations/userEntryValidation';

const formPlaceholderText = 'steamcommunity.com/...';

const renderUserField = ({
  input,
  label,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type='text' placeholder={formPlaceholderText}/>
      { touched && error && <span>{error}</span> }
    </div>
  </div>
);

const renderUsers = ({fields}) => (
  <ul>
    {fields.map((user, index) => 
      <li key={index}>
        <Field
          name={user}
          type='text'
          component={renderUserField}
          label='Steam User'
        />
      </li>
    )}
    <li>
      <button type='button' onClick={() => fields.push('')}>
        Add User
      </button>
    </li>
  </ul>
)

const UsersForm = ({reset, pristine, submitting}) => (
  <form>
    <FieldArray name='users' component={renderUsers} />
    <div>
      <button type='submit' disabled={submitting || pristine}>
        Submit
      </button>
      <button
          type='button'
          disabled={submitting || pristine}
          onClick={reset}
      >
        Reset
      </button>
    </div>
  </form>
);

export default reduxForm({
  form: 'users',
  validate: validateUserInput,
})(UsersForm);
