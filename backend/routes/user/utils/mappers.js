const mapUserToResponse = (res) => ({
  username: res.username,
  id: res._id,
  createdAt: res.createdAt,
});

exports.mapUserToResponse = mapUserToResponse;
