/* Get osu! mode from string */

const std = ['Standard', 'standard', 's', 'std', '0']
const taiko = ['Taiko', 'taiko', 't', '1']
const ctb = ['Catch', 'catch', 'c', 'ctb', '2']
const mania = ['Mania', 'mania', 'm', '3']

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
