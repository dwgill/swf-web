const steam_or_vanity_id_re = /^[A-Za-z0-9-_]+$/
const steam_community_re = /^(https?:\/\/)?steamcommunity.com\/(id\/[A-Za-z0-9-_]+|profiles\/[0-9]+)\/?$/

const noInput = (users) => {
  if (!users || !users.length) {
    return { _error: 'At least one user required' };
  }
}

const invalidUserValue = (user, required = true) => {
  if (!user) {
    if (required) {
      return 'Required';
    } else {
      return null;
    }
  } else if (!user.match(steam_or_vanity_id_re)
          && !user.match(steam_community_re)) {
    return 'Invalid user';
  } else {
    return null;
  }
};

const invalidUserField = (user, index, users) => {
  if (index === 0 || index+1 < users.length) {
    return invalidUserValue(user);
  } else { // Last user
    return invalidUserValue(user, false);
  }
}

const userEntryValidation = (values) => ({
  users: noInput(values.users) || values.users.map(invalidUserField),
});

export default userEntryValidation;
