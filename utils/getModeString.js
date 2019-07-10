/* Get mode name from number */

function getModeString (mode) {
  if (mode === '0') {
    return 'Standard'
  }
  if (mode === '1') {
    return 'Taiko'
  }
  if (mode === '2') {
    return 'Catch the Beat'
  }
  if (mode === '3') {
    return 'Mania'
  }
}

module.exports = getModeString
