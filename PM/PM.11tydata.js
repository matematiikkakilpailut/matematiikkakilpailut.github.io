import fs from "fs";
import { parse } from "csv-parse/sync";

const options = {
  columns: true,
  skip_empty_lines: true,
  delimiter: "\t",
};

export const kilpailut = parse(fs.readFileSync("PM/kilpailut.tsv"), options);
