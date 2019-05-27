module.exports = {
  // errorHandler: (err, req, res, next) => {
  //   res.status(500)
  //   res.render('error', { error: err });
  // },

  logErrors: (err, req, res, next) => {
    console.log(err);
    next(err);
  },

  clientErrorHandler: (err, req, res, next) => {
    if (req.xhr) {
      res.status(500).json({ error: 'Internal server error' });
    } else {
      next(err);
    }
  },

  errorHandler: (err, req, res, next) => {
    if (res.headersSent) {
      return next(err);
    }
    res.status(500).json({ error: err });
  },

};