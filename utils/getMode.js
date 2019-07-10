/* Get osu! mode from string */

const std = ['Standard', 'standard', 's', 'std']
const taiko = ['Taiko', 'taiko', 't']
const ctb = ['Catch', 'catch', 'c', 'ctb']
const mania = ['Mania', 'mania', 'm']

function getMode (string) {
  if (std.includes(string)) {
    return '0'
  } else if (taiko.includes(string)) {
    return '1'
  } else if (ctb.includes(string)) {
    return '2'
  } else if (ctb.includes(string)) {
    return '3'
  }
}

module.exports = getMode
