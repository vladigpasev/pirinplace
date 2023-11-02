import Link from 'next/link'
import { languages } from '../../src/app/i18n/settings'
//@ts-ignore
export const LanguageSwitcher = ({ lng }) => {

  // Намира следващия език, който да се покаже след текущия
  //@ts-ignore
  const getNextLanguage = (current) => {
    const index = languages.indexOf(current)
    return index === 0 ? languages[1] : languages[0]
  }

  const nextLng = getNextLanguage(lng)

  return (
      <Link href={`/${nextLng}`}>
        <img
          src={`/flags/${lng}.png`}
          alt={`Flag for ${lng}`}
          width="30px"
          className='cursor-pointer'
        />
      </Link>
  )
}
