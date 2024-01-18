export function hasNullValue(obj: { [key: string]: any }) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === null) {
      return true
    }
  }
  return false
}
