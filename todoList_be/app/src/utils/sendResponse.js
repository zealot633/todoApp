const sendResponse = (response, status, data) =>
  response.status(status).send(data);

module.exports = sendResponse;
