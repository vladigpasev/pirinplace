import Link from 'next/link'
import { useTranslation } from '../i18n'
import Navbar from '@/components/Navbar'
//@ts-ignore
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    <>
      <Navbar lng={lng}/>
    </>
  )
}