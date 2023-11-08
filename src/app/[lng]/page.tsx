import Link from 'next/link'
import { useTranslation } from '../i18n'
import Navbar from '@/components/Navbar'
import { Trans } from 'react-i18next';
import Footer from '@/components/Footer';

//@ts-ignore
export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)

  //#e29334
  return (
    <>
      <section id='hero'>
        <div className="hero min-h-screen bg-base-200 pb-12 px-2">
          <div className="hero-content flex-col lg:flex-row-reverse gap-10">
            <img src="/building_main.jpg" className="max-w-sm rounded-lg shadow-2xl object-cover w-full h-full" />
            <div>
              <h1 className="text-5xl font-bold">{t("title")}</h1>
              <p className="py-6">{t("description")}</p>
              <button className="btn bg-primary">{t("get_started")}</button>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className='py-12 px-5 bg-base-100'>
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">{t("advantages")}</h2>
          <div className='flex w-full justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full place-items-center">
              <div className='flex flex-row items-center gap-3'><img src="/svgs/document_svg.svg" alt="Document photo" width="30px" /><p className='text-[14px] font-medium'>{t("valid-act-16")}</p></div>
              <div className='flex flex-row items-center gap-3'><img src="/svgs/owner_svg.svg" alt="Owner svg" width="30px" /><p className='text-[14px] font-medium'>{t("selling_from_owner")}</p></div>
              <div className='flex flex-row items-center gap-3'><img src="/svgs/distance_svg.svg" alt="Distance svg" width="30px" /><p className='text-[14px] font-medium'>{t("close_to_ski_lifts")}</p></div>
              <div className='flex flex-row items-center gap-3'><img src="/svgs/brick_svg.svg" alt="Brick svg" width="30px" /><p className='text-[14px] font-medium'>{t("quality")}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-properties" className="py-12 px-5 bg-base-200">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">{t("featured_apartments")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="card w-full md:w-11/12 lg:w-full bg-base-100 shadow-xl">
              <figure className="relative overflow-hidden h-48">
                <img src="/double_apartament.jpg" alt="Apartment" className="object-cover w-full h-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{t("apartament1_title")}</h2>
                <p>{t("apartament1_description")}</p>
                <div className="card-actions justify-start my-2">
                  <div className="badge badge-outline text-secondary"><img src='/svgs/bath_svg.svg' width='12px' className='mr-1' /> {t("bath")}</div>
                  <div className="badge badge-outline text-secondary"><img src='/svgs/many_sq_meters_svg.svg' width='12px' className='mr-1' /> {t("120sqm")}</div>
                  <div className="badge badge-outline text-secondary"><img src='/svgs/family_svg.svg' width='12px' className='mr-1' /> {t("4pers")}</div>
                  <div className="badge badge-outline text-secondary"><img src='/svgs/mountain_svg.svg' width='12px' className='mr-1' /> {t("view")}</div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">{t("more_info")}</button>
                </div>
              </div>
            </div>

            <div className="card w-full md:w-11/12 lg:w-full bg-base-100 shadow-xl">
              <figure className="relative overflow-hidden h-48">
                <img src="/double_apartament.jpg" alt="Apartment" className="object-cover w-full h-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{t("apartament2_title")}</h2>
                <p>{t("apartament2_description")}</p>
                <div className="card-actions justify-start my-2">
                  <div className="badge badge-outline text-secondary"><img src='/svgs/bath_svg.svg' width='12px' className='mr-1' /> {t("bath")}</div>
                  <div className="badge badge-outline text-secondary"><img src='/svgs/many_sq_meters_svg.svg' width='12px' className='mr-1' /> {t("70sqm")}</div>
                  <div className="badge badge-outline text-secondary"><img src='/svgs/Man-and-woman-icon.svg' width='12px' className='mr-1' /> {t("2pers")}</div>
                  <div className="badge badge-outline text-secondary"><img src='/svgs/mountain_svg.svg' width='12px' className='mr-1' /> {t("view")}</div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">{t("more_info")}</button>
                </div>
              </div>
            </div>

            <div className="card w-full md:w-11/12 lg:w-full bg-base-100 shadow-xl">
              <figure className="relative overflow-hidden h-48">
                <img src="/double_apartament.jpg" alt="Apartment" className="object-cover w-full h-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{t("apartament3_title")}</h2>
                <p>{t("apartament3_description")}</p>
                <div className="card-actions justify-start my-2">
                  <div className="badge badge-outline text-secondary"><img src='/svgs/bath_svg.svg' width='12px' className='mr-1' /> {t("bath")}</div>
                  <div className="badge badge-outline text-secondary"><img src='/svgs/many_sq_meters_svg.svg' width='12px' className='mr-1' /> {t("70sqm")}</div>
                  <div className="badge badge-outline text-secondary"><img src='/svgs/Man-and-woman-icon.svg' width='12px' className='mr-1' /> {t("2pers")}</div>
                  <div className="badge badge-outline text-secondary"><img src='/svgs/mountain_svg.svg' width='12px' className='mr-1' /> {t("view")}</div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">{t("more_info")}</button>
                </div>
              </div>
            </div>

          </div>
          <div className="text-center mt-8">
            <button className="btn btn-primary">{t("see_more_apartments")}</button>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-12 px-5 bg-base-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">{t("gallery_title")}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            <div className="group relative">
              <img src="/gallery/building_edge.jpg" alt="Gallery Image 1" className="object-cover w-full h-64 transition-transform duration-300 transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white">{t("image_description1")}</span>
              </div>
            </div>

            <div className="group relative">
              <img src="/gallery/room_double.jpg" alt="Gallery Image 2" className="object-cover w-full h-64 transition-transform duration-300 transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white">{t("image_description2")}</span>
              </div>
            </div>

            <div className="group relative">
              <img src="/gallery/bathroom.jpg" alt="Gallery Image 2" className="object-cover w-full h-64 transition-transform duration-300 transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white">{t("image_description3")}</span>
              </div>
            </div>

            <div className="group relative">
              <img src="/gallery/view.jpg" alt="Gallery Image 2" className="object-cover w-full h-64 transition-transform duration-300 transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white">{t("image_description4")}</span>
              </div>
            </div>

            <div className="group relative">
              <img src="/gallery/terrace.jpg" alt="Gallery Image 2" className="object-cover w-full h-64 transition-transform duration-300 transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white">{t("image_description5")}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="faq" className="py-12 px-5 bg-base-150">
        <div className="container mx-auto">
          <div className="flex flex-wrap md:flex-nowrap justify-between">

            {/* Title and Description */}
            <div className="md:w-1/2 lg:w-2/5 mb-6 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">{t("faq_title")}</h2>
              <p>{t("faq_descr_before_link")}<Link href="/contacts" className='text-primary hover:text-primary-dark transition-colors duration-300'>{t("link_faq")}</Link>{t("faq_descr_after_link")}</p>
            </div>

            {/* Questions and Answers */}
            <div className="md:w-1/2 lg:w-3/5">
              <div className="pl-4 mb-2">
                <div className="mb-4">
                  <h3 className="font-semibold text-normal mb-2">{t("faq_question1")}</h3>
                  <p className='font-light'>{t("faq_answer1")}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-normal mb-2">{t("faq_question2")}</h3>
                  <p className='font-light'>{t("faq_answer2")}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-normal mb-2">{t("faq_question3")}</h3>
                  <p className='font-light'>{t("faq_answer3")}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-normal mb-2">{t("faq_question4")}</h3>
                  <p className='font-light'>{t("faq_answer4")}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-normal mb-2">{t("faq_question5")}</h3>
                  <p className='font-light'>{t("faq_answer5")}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-normal mb-2">{t("faq_question6")}</h3>
                  <p className='font-light'>{t("faq_answer6")}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-normal mb-2">{t("faq_question7")}</h3>
                  <p className='font-light'>{t("faq_answer7")}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-normal mb-2">{t("faq_question8")}</h3>
                  <p className='font-light'>{t("faq_answer8")}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-normal mb-2">{t("faq_question9")}</h3>
                  <p className='font-light'>{t("faq_answer9")}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold text-normal mb-2">{t("faq_question10")}</h3>
                  <p className='font-light'>{t("faq_answer10")}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}