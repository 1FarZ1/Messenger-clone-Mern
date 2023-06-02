const createTokenUser = (user) => {
    return { name: user.username, userId: user._id};
  };
  
  module.exports = createTokenUser;