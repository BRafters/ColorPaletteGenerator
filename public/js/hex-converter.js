const HEX_MAP = new Map([
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
  ["F", 15],
]);

/// Converts a hex value to an rgb value
function convertToRGB(color = "") {
  let rgb = "RGB: ";
  let rgbValue = 0;

  for (var i = 0; i < color.length; i++) {
    if ((i + 1) % 2 == 0) {
      // Concat the value to the string
      rgb = rgb.concat(rgbValue, " ");
      rgbValue = 0;
    }

    // If a character is a letter, we need to access the map and grab the corresponding number, then multiply
    if (color.charAt(i).match(/([A-Za-z])/i)) {
      rgbValue += HEX_MAP.get(color.charAt(i).toUpperCase()) * 16;
    } else rgbValue += HEX_MAP.get(color.charAt(i).toUpperCase());
  }

  return rgb;
}

export default convertToRGB;
