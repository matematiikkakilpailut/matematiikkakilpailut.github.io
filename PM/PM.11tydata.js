const fs = require("fs"),
  { parse } = require("csv-parse/sync"),
  options = {
    columns: true,
    skip_empty_lines: true,
    delimiter: "\t",
  };

module.exports = {
  kilpailut: parse(fs.readFileSync("PM/kilpailut.tsv"), options),
};
