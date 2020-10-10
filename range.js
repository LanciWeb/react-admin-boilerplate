module.exports = (request, response, next) => {
  //? this is a header needed by react admin in the response
  //! the second argument should be calculated by the backend and represents pagination data
  response.header('Content-Range', 'posts 0-20/20');
  next();
}