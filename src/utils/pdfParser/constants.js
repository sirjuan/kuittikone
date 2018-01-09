// Constants for parsePage()
export const DASHES = /-{3,}/g; // 3 or more dashes
export const SPACES = / {2,}/g; // 2 or more spaces
export const DATE_CHECK = {
  shop: /\d{1,}:\d{2} {2,}\d{1,}-\d{2}-\d{4}/g, // e.g. 18:29  1.1.2018 or 9:01  12.12.2017
  abc: /\d{1,}\.\d{1,}\.\d{2} {1,}\d{1,}:\d{2}:\d{2}/g //24.11.17 18:03:04
}

export const DATE_FORMAT = {
  shop: "H:mm DD-MM-YYYY",
  abc: 'DD-MM-YY H:mm.ss'
}
