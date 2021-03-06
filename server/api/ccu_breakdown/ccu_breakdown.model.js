'use strict';

var cradle = require('cradle');
var utility = require('../../components/utility');

var db = new (cradle.Connection)().database('ccu_breakdown');

exports.byDate = byDate;
exports.all = all;
exports.getWithin = getWithin;

function byDate(options, cb) {
  var opts = {
    descending: true
  };

  if (options) {
    if (options.descending !== undefined)
      opts.descending = utility.parseBool(options.descending);
  }

  db.view('ccu_breakdown/by_date', opts, function(err, rows) {
    if (err) return cb(err);

    return cb(null, rows.toArray());
  });
}

function all(cb) {
  db.all({ include_docs: true }, function(err, rows) {
    if (err) return cb(err);

    return cb(null, utility.removeDesignDocs(rows.toArray()));
  });
}


function getWithin(startDate, endDate, cb) {
  var opts = {
    endkey: endDate
  };

  if (opts) {
    if (opts.descending !== undefined)
      opts.descending = utility.parseBool(options.descending);
  }

  db.view('ccu_breakdown/by_latest_broken_date', opts, function(err, rows) {
    if (err) return cb(err);

    return cb(null, rows.toArray());
  });
}