const steam_or_vanity_id_re = /^[A-Za-z0-9-_]+$/
const steam_community_re = /^(https?:\/\/)?steamcommunity.com\/(id\/[A-Za-z0-9-_]+|profiles\/[0-9]+)\/?$/

const noInput = (users) => {
  if (!users || !users.length) {
    return { _error: 'At least one user required' };
  }
}

const invalidInputForUser = (user) => {
  if (!user) {
    return 'Required';
  } else if (!user.match(steam_or_vanity_id_re)
          && !user.match(steam_community_re)) {
    return 'Invalid user';
  } else {
    return null;
  }
}

const userEntryValidation = (values) => ({
  users: noInput(values.users) || values.users.map(invalidInputForUser),
});

export default userEntryValidation;
