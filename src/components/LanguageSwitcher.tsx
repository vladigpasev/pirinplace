"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { languages } from '../../src/app/i18n/settings';

//@ts-ignore
export const LanguageSwitcher = ({ lng }) => {
  const pathname = usePathname();

  //@ts-ignore
  const getNextLanguage = (current) => {
    const index = languages.indexOf(current);
    return languages[(index + 1) % languages.length];
  };

  const nextLng = getNextLanguage(lng);

  // Adjust the pathname to include the next language
  const newPathname = pathname.replace(/^\/[a-zA-Z-]+/, `/${nextLng}`);

  return (
    <Link href={newPathname} locale={nextLng}>
        <img
          src={`/flags/${lng}.png`}
          alt={`Flag for ${lng}`}
          width="30px"
          className='cursor-pointer mr-2'
        />
    </Link>
  );
};
