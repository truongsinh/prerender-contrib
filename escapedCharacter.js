var url = require('url');

module.exports = {
  beforePhantomRequest: function(req, res, next) {
    parts = url.parse(req.prerender.url, true);
    var _escaped_character_ = parts.query['_escaped_character_'];
    if (_escaped_character_) {
      delete parts.query['_escaped_character_'];
      delete parts.search;
      var newUrl = url.format(parts);
      newUrl = newUrl.replace('#!', _escaped_character_);
      req.prerender.url = newUrl;
    }
    next();
  }
};
