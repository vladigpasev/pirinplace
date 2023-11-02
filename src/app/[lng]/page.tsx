import Link from 'next/link'
import { useTranslation } from '../i18n'

interface PageProps {
  lng: string;
}

interface ExtendedPageProps extends PageProps {
  params: {
    lng: string;
  }
}

export default async function Page({ params: { lng } }: ExtendedPageProps) {
  const { t } = await useTranslation(lng)
  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/about`}>
        {t('to-second-page')}
      </Link>
    </>
  )
}