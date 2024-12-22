import fs from "fs";
import { parse } from "csv-parse/sync";

const options = {
  columns: true,
  skip_empty_lines: true,
  delimiter: "\t",
};

export const alkukilpailu = parse(fs.readFileSync("MAOL/alkukilpailu.tsv"), options);
export const loppukilpailu = parse(fs.readFileSync("MAOL/loppukilpailu.tsv"), options);
