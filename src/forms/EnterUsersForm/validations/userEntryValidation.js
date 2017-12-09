const steam_or_vanity_id_re = /^[A-Za-z0-9-_]+$/;
const steam_community_re = /^(https?:\/\/)?steamcommunity.com\/(id\/[A-Za-z0-9-_]+|profiles\/[0-9]+)\/?$/;

const noInput = users => {
  if (!users || !users.length || users.every(user => !user)) {
    return { _error: 'At least one user required' };
  } else {
    return null;
  }
};

const invalidUserValue = user => {
  if (!user) {
    return null;
  } else if (
    !user.match(steam_or_vanity_id_re) &&
    !user.match(steam_community_re)
  ) {
    return 'Invalid user value';
  } else {
    return null;
  }
};

const userEntryValidation = values => ({
  users: noInput(values.users) || values.users.map(invalidUserValue),
});

export default userEntryValidation;
