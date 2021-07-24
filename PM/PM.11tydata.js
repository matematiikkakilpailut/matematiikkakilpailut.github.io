const fs = require("fs"),
      csv = require("csv-parse/lib/sync"),
      parse = x => csv(x, {
          columns: true,
          skip_empty_lines: true,
          delimiter: "\t"
      });

module.exports = {
    kilpailut: parse(fs.readFileSync("PM/kilpailut.tsv"))
}

