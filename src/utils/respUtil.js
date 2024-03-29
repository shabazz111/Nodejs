exports.resp = (res, code, message, data) => {
  res.status(code).json({
    message: message,
    data: data,
  });
};
