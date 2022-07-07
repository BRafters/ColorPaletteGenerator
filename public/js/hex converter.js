const HEX_MAP = new Map(
  ["0", 0],
  ["1", 1],
  ["2", 2],
  ["3", 3],
  ["4", 4],
  ["5", 5],
  ["6", 6],
  ["7", 7],
  ["8", 8],
  ["9", 9],
  ["A", 10],
  ["B", 11],
  ["C", 12],
  ["D", 13],
  ["E", 14],
  ["F", 15]
);

function convertToRGB(color = "") {
  let rgb = "";
  let rgbValue = 0;

  for (var i = 0; i < color.length; i++) {
    if ((i + 1) % 2 != 0) {
      // If a character is a letter, we need to access the map and grab the corresponding number, then multiply
      if (isNaN(color.charAt(i))) {
        rgbValue += HEX_MAP.get(color.charAt(i)) * 16;
        continue;
      }

      rgbValue += HEX_MAP.get(color.charAt(i));
    } else {
      // Concat the value to the string
      rgb.concat(rgbValue, " ");
      rgbValue = 0;
    }
  }

  return rgbValue;
}

export default convertToRGB;
