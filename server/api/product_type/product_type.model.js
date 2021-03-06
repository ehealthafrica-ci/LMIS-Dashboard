'use strict';

var cradle = require('cradle');
var utility = require('../../components/utility');

var db = new (cradle.Connection)().database('product_types');

var typeToCategory = {
  "00f987e4-54e1-46f0-820b-b249a6d38759": "66e1bc4f-1dab-4842-80c5-49f626bde74e",
  "0930b906-4802-4a65-8516-057bd839db3e": "66e1bc4f-1dab-4842-80c5-49f626bde74e",
  "111fbb51-0c5a-492a-97f6-2c7664e23d01": "66e1bc4f-1dab-4842-80c5-49f626bde74e",
  "1203c362-b7a8-499a-b7ba-b842bace7920": "66e1bc4f-1dab-4842-80c5-49f626bde74e",
  "19e16c20-04b7-4e06-a679-7f7b60d976be": "66e1bc4f-1dab-4842-80c5-49f626bde74e",
  "251fc8c2-0273-423f-a519-4ea20fc74832": "1c761db0-d7f3-4abf-8c12-6c678f862851",
  "2fee31f0-7757-4f06-9914-d16c5ca9cc5f": "66e1bc4f-1dab-4842-80c5-49f626bde74e",
  "367f3f7f-a1cc-4266-8a0a-020722576cc9": "1c761db0-d7f3-4abf-8c12-6c678f862851",
  "939d5e05-2aa4-4883-9246-35c60dfa06a5": "66e1bc4f-1dab-4842-80c5-49f626bde74e",
  "abe41e88-ab4a-4c6f-b7a4-4549e13fb758": "66e1bc4f-1dab-4842-80c5-49f626bde74e",
  "db513859-4491-4db7-9343-4980a16c8b04": "66e1bc4f-1dab-4842-80c5-49f626bde74e",
  "e55e1452-b0ab-4046-9d7e-3a98f1f968d0": "66e1bc4f-1dab-4842-80c5-49f626bde74e",
  "f7675c7e-856a-45e8-b2af-d50f42950ac1": "66e1bc4f-1dab-4842-80c5-49f626bde74e",
  "401f8608-e232-4c5a-b32d-032d632abf88": "1c761db0-d7f3-4abf-8c12-6c678f862851"
};

exports.all = all;

function all(cb) {
  db.all({ include_docs: true }, function(err, rows) {
    if (err) return cb(err);

    return cb(null, addCategories(utility.removeDesignDocs(rows.toArray())));
  });
}

function addCategories(rows) {
  rows.forEach(function(row) {
    if (!row.category)
      row.category = typeToCategory[row._id];
  });

  return rows;
}
