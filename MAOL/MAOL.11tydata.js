const fs = require("fs"),
      csv = require("csv-parse/lib/sync"),
      parse = x => csv(x, {
          columns: true,
          skip_empty_lines: true,
          delimiter: "\t"
      });

module.exports = {
    alkukilpailu: parse(fs.readFileSync("MAOL/alkukilpailu.tsv")),
    loppukilpailu: parse(fs.readFileSync("MAOL/loppukilpailu.tsv"))
}

