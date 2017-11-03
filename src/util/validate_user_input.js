const steam_or_vanity_id_re = /^[A-Za-z0-9-_]+$/
const steam_community_re = /^(https?:\/\/)?steamcommunity.com\/(id\/[A-Za-z0-9-_]+|profiles\/[0-9]+)\/?$/

export default (values, props) => {
  const errors = {};
  if (!values.users || !values.users.length) {
    errors.users = { _error: 'At least one user required' }
  } else {
    const usersArrayErrors = [];
    values.users.forEach((user, userIndex) => {
      let userError;
      if (!user) {
        usersArrayErrors[userIndex] = 'Required'
      } else if (!user.match(steam_or_vanity_id_re)
              && !user.match(steam_community_re)) {
        usersArrayErrors[userIndex] = 'Invalid user input'
      }
    })
    if (usersArrayErrors.length) {
      errors.users = usersArrayErrors;
    }
  }
  return errors;
}