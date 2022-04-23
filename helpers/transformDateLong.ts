import dayjs from "dayjs"
import "dayjs/locale/fr"
dayjs.locale("fr")

const transformDate = (date: string, longDate: boolean = false, lang: "fr" | "en" = "fr") => {
  const languagesLong = { fr: "D MMMM YYYY", en: "MMMM D YYYY" }
  const languagesShort = { fr: "DD/MM/YYYY", en: "MM/DD/YYYY" }

  if (longDate) {
    return dayjs(date).format(languagesLong[lang])
  } else {
    return dayjs(date).format(languagesShort[lang])
  }
}

export default transformDate
