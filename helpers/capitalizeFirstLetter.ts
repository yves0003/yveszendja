export const capitalizeFirstLetter = (str: string, locale?: string) => {
  const firstCP = str.codePointAt(0)!
  const index = firstCP > 0xffff ? 2 : 1
  if (locale) {
    return String.fromCodePoint(firstCP).toLocaleUpperCase(locale) + str.slice(index)
  }
  return String.fromCodePoint(firstCP).toUpperCase() + str.slice(index)
}
