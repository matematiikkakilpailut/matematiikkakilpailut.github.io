const fs = require("fs"),
  { parse } = require("csv-parse/sync"),
  options = {
    columns: true,
    skip_empty_lines: true,
    delimiter: "\t",
  };

module.exports = {
  alkukilpailu: parse(fs.readFileSync("MAOL/alkukilpailu.tsv"), options),
  loppukilpailu: parse(fs.readFileSync("MAOL/loppukilpailu.tsv"), options),
};
