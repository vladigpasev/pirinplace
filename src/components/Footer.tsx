import React from 'react'
import { useTranslation } from '../app/i18n'
//@ts-ignore
async function Footer({ lng }) {
    const { t } = await useTranslation(lng)
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.00 0.00 1186.00 1766.00" width={24}>
                        <path fill="#479ed2" d="
  M 706.38 8.13
  C 723.82 11.49 741.58 18.14 756.79 27.38
  Q 862.95 91.91 971.12 164.87
  C 984.78 174.09 997.75 182.98 1009.40 193.43
  C 1041.10 221.82 1065.30 258.31 1078.08 299.09
  Q 1092.67 345.66 1092.60 393.00
  Q 1092.24 622.87 1092.05 852.75
  C 1092.04 860.45 1091.67 868.08 1091.36 875.74
  C 1088.30 949.31 1055.50 1015.53 998.26 1061.80
  C 988.39 1069.77 975.62 1078.49 963.11 1086.72
  Q 854.40 1158.28 745.31 1229.26
  C 733.18 1237.15 726.76 1241.62 716.01 1245.20
  C 707.83 1247.92 696.65 1248.13 692.46 1239.04
  Q 690.44 1234.64 689.75 1227.14
  C 688.20 1210.32 687.08 1193.73 686.99 1176.50
  Q 683.58 574.24 685.96 64.00
  Q 686.09 34.95 700.94 7.90
  Q 701.20 7.43 701.73 7.47
  Q 703.56 7.58 706.38 8.13
  Z"
                        />
                        <path fill="#e19333" d="
  M 80.44 1377.01
  C 74.01 1118.69 74.34 860.09 78.63 601.74
  C 79.05 576.05 80.20 550.39 81.93 524.75
  C 82.61 514.55 83.87 504.25 86.85 494.41
  C 102.11 444.10 134.51 404.67 175.36 372.59
  C 191.93 359.57 215.79 342.92 238.34 326.88
  Q 337.96 256.03 440.16 188.95
  C 444.39 186.18 448.94 187.79 448.95 193.37
  Q 449.25 972.94 449.57 1752.50
  Q 449.57 1754.65 447.26 1757.77
  C 444.18 1761.91 441.01 1760.92 436.93 1758.58
  Q 428.73 1753.86 420.83 1748.67
  Q 315.60 1679.56 207.50 1603.25
  Q 187.41 1589.07 170.17 1575.86
  C 120.82 1538.04 91.17 1487.15 83.37 1424.77
  C 81.58 1410.48 80.85 1393.58 80.44 1377.01
  Z"
                        />
                    </svg>

                    <p>{t("pirin_place_ltd")} <br />{t("pirin_place_moto")}</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}

export default Footer