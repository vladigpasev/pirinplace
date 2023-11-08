import { FormEvent } from 'react';
import { useTranslation } from '../../i18n'
import ContactForm from '@/components/ContactForm';
import { useFormState } from 'react-dom';
import { sendEmail } from '@/app/actions';

//@ts-ignore
export default async function ContactPage({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">{t("contact_us")}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t("contact_info")}</h2>
            <p className="mb-2"><strong>{t("phone")}:</strong> +359 888 804 586</p>
            <p className="mb-2"><strong>{t("email")}:</strong> info@pirinplace.com</p>

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">{t("visit_us")}</h3>
              {/* Google Maps Embed */}
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  title="Google Maps"
                  className="w-full h-full"
                  frameBorder="0" style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185.7840925018959!2d23.49481972094938!3d41.83808446906513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14abaebbdccdfce9%3A0xa23678e841d698fa!2z0YPQuy4g4oCe0JHQsNC90YzQviDQnNCw0YDQuNC90L7QsuKAnCwgMjc3MCDQutCyLiDQodGC0LDRgNC40Y8g0LPRgNCw0LQsINCR0LDQvdGB0LrQvg!5e0!3m2!1sbg!2sbg!4v1699017493997!5m2!1sbg!2sbg"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm lng={lng}/>
        </div>
      </div>
    </>
  )
}
