import Link_header from "./LinkHeader";
import ToggleTheme from "../toggle/ToggleTheme";
import { GiHamburgerMenu } from "react-icons/gi"
import logo from "../../imagens/go-code5.png"

export default function Header() {
    const ativaMenu = () => {
        const element = document.querySelector('.menu-links').classList
        element.toggle('hidden');
        element.toggle('flex');
    }
    return (
        <div className="flex justify-between sm:justify-center align-baseline my-4 h-8 border-b-2 dark:border-slate-200 border-slate-800 pb-10">
            <div className="mx-6 sm:mx-3 h-8 relative sm:hidden">
                <GiHamburgerMenu className="dark:text-gray-100 h-6 w-6 sm:hidden" onClick={ativaMenu} />
            </div>
            <div className="sm:absolute left-10">
                <svg className="h-7 sm:w-20 md:w-36 w-36 dark:invert" viewBox="0 0 406 92"><defs id="SvgjsDefs2344"></defs><g id="SvgjsG2345" featurekey="symbolFeature-0" transform="matrix(1.8421052631578947,0,0,1.8421052631578947,-11.052631578947368,-11.101313540810033)" fill="#111111"><g xmlns="http://www.w3.org/2000/svg"><path d="M6,42.0350037c0,1.7700195,1.4400024,3.210022,3.210022,3.210022h15.4599609v7.0999756H23.710022   c-0.5499878,0-1,0.4500122-1,1c0,0.5599976,0.4500122,1,1,1h14.5800171c0.5499878,0,1-0.4400024,1-1c0-0.5499878-0.4500122-1-1-1   h-0.9700317v-7.0999756h15.4700317C54.5599976,45.2450256,56,43.8050232,56,42.0350037v-2.6900024H6V42.0350037z"></path><path d="M52.7900391,7.6549988H9.210022C7.4400024,7.6549988,6,9.0950012,6,10.8650208v26.4799805h50V10.8650208   C56,9.0950012,54.5599976,7.6549988,52.7900391,7.6549988z M24.5200195,19.6750183l-10.6500244,5.3400269v0.0599976   l10.6500244,5.3299561v1.8800049l-12.6300049-6.5100098v-1.4699707l12.6300049-6.5100098V19.6750183z M28.1300049,33.3750305   h-1.8300171l7.6000366-19.75h1.8599854L28.1300049,33.3750305z M50.1099854,25.8050232l-12.6300049,6.4799805v-1.8800049   l10.7300415-5.3299561v-0.0599976l-10.7300415-5.3400269v-1.8800049l12.6300049,6.4899902V25.8050232z"></path></g></g><g id="SvgjsG2346" featurekey="textGroupContainer" transform="matrix(1,0,0,1,405,0)" fill="#111111"><rect xmlns="http://www.w3.org/2000/svg" y="0" height="1" width="1" opacity="0"></rect><rect xmlns="http://www.w3.org/2000/svg" y="0" x="-293" width="3" height="92"></rect></g><g id="SvgjsG2347" featurekey="vMvB0T-0" transform="matrix(3.2390696803031234,0,0,3.2390696803031234,127.66786973751123,3.5007944083204237)" fill="#111111"><path d="M6.8 12.24 l3.14 -0.02 q2.12 0 2.12 2 l0 5.26 q-2.58 0.82 -5.42 0.82 q-1.44 0 -2.55 -0.48 t-1.86 -1.38 t-1.13 -2.21 t-0.38 -2.97 q0 -1.82 0.53 -3.17 t1.42 -2.25 t2.05 -1.35 t2.42 -0.45 q2.6 0 4.88 1.44 q-0.02 0.32 -0.15 0.65 t-0.32 0.64 t-0.44 0.56 t-0.51 0.43 q-1.66 -1.08 -3.36 -1.08 q-3.26 0 -3.26 4.56 q0 4.54 3.34 4.54 q0.46 0 0.89 -0.04 t0.85 -0.12 l0 -1.34 q0 -0.46 0.01 -0.8 t0.03 -0.58 l-1 0 q-0.86 0 -1.19 -0.33 t-0.33 -1.03 q0 -0.6 0.22 -1.3 z M17.560000000000002 16.28 q0.54 1.56 2.18 1.56 q0.82 0 1.33 -0.41 t0.8 -1.04 t0.39 -1.41 t0.1 -1.54 q0 -0.7 -0.05 -1.56 t-0.29 -1.61 t-0.76 -1.26 t-1.52 -0.51 q-0.96 0 -1.47 0.49 t-0.76 1.21 t-0.31 1.53 t-0.06 1.43 q0 0.92 0.09 1.64 t0.33 1.48 z M15.94 19.04 q-2.14 -1.78 -2.14 -5.86 q0 -1.76 0.41 -3.09 t1.18 -2.23 t1.87 -1.36 t2.48 -0.46 t2.49 0.46 t1.88 1.37 t1.18 2.24 t0.41 3.07 t-0.41 3.07 t-1.18 2.23 t-1.88 1.36 t-2.49 0.46 q-2.28 0 -3.8 -1.26 z M39.480000000000004 11.78 l0 -0.24 q0 -2.96 -2.2 -2.96 q-1.26 0 -1.82 1.15 t-0.56 3.39 q0 2.22 0.7 3.3 t2.04 1.08 q0.7 0 1.55 -0.33 t1.85 -1.05 q0.5 0.34 0.93 0.93 t0.53 1.13 q-0.46 0.44 -1.07 0.83 t-1.32 0.67 t-1.48 0.45 t-1.55 0.17 q-1.54 0 -2.6 -0.59 t-1.71 -1.57 t-0.94 -2.26 t-0.29 -2.66 q0 -1.8 0.45 -3.15 t1.22 -2.25 t1.81 -1.35 t2.22 -0.45 q1.2 0 2.18 0.32 t1.67 0.88 t1.06 1.32 t0.37 1.64 q0 1.78 -1.82 1.78 q-0.54 0 -1.22 -0.18 z M47.379999999999995 16.28 q0.54 1.56 2.18 1.56 q0.82 0 1.33 -0.41 t0.8 -1.04 t0.39 -1.41 t0.1 -1.54 q0 -0.7 -0.05 -1.56 t-0.29 -1.61 t-0.76 -1.26 t-1.52 -0.51 q-0.96 0 -1.47 0.49 t-0.76 1.21 t-0.31 1.53 t-0.06 1.43 q0 0.92 0.09 1.64 t0.33 1.48 z M45.76 19.04 q-2.14 -1.78 -2.14 -5.86 q0 -1.76 0.41 -3.09 t1.18 -2.23 t1.87 -1.36 t2.48 -0.46 t2.49 0.46 t1.88 1.37 t1.18 2.24 t0.41 3.07 t-0.41 3.07 t-1.18 2.23 t-1.88 1.36 t-2.49 0.46 q-2.28 0 -3.8 -1.26 z M66.6 19.12 q-0.64 0.52 -1.68 0.76 t-2.3 0.24 q-0.62 0 -1.79 -0.02 t-2.93 -0.06 l-0.14 -0.14 l0 -13.46 l0.14 -0.14 q1.16 -0.04 2.41 -0.06 t2.63 -0.02 q1.7 0 2.84 0.54 t1.82 1.48 t0.96 2.21 t0.28 2.73 q0 2 -0.46 3.46 t-1.78 2.48 z M62.919999999999995 17.62 q2.64 0 2.64 -4.44 q0 -4.46 -2.64 -4.46 l-1.13 0 t-0.85 -0.02 l0 8.94 q0.36 -0.02 0.85 -0.02 l1.13 0 z M74.24 15.96 l-0.02 1.44 l0 0.02 q0.92 -0.04 1.48 -0.04 l4.64 0 q0 0.74 -0.06 1.14 q-0.24 1.54 -2.04 1.54 l-5.32 0 q-0.86 0 -1.35 -0.5 t-0.49 -1.36 l0 -11.72 l0.14 -0.14 l8.62 0 q0.12 0.58 0.12 1.26 t-0.28 1.42 l-5.46 0 l0.02 1.44 l0 1.4 q0.52 -0.02 1.36 -0.02 l3.06 0 q0.18 0.56 0.18 1.28 t-0.18 1.32 l-4.42 0 l0 1.52 z"></path></g></svg>
            </div>
            <div className="hidden sm:flex absolute sm:relative left-0 z-10 bg-zinc-100 dark:bg-zinc-800 flex-col sm:flex-row border-[1px] border-solid border-black rounded rounded-tl-none translate-y-10 sm:border-none sm:translate-y-0 menu-links">
                <Link_header fechaMenu={ativaMenu} caminho="/" texto="Home" />
                <Link_header fechaMenu={ativaMenu} caminho="/certificado" texto="Certificado" />
                <Link_header fechaMenu={ativaMenu} caminho="/projeto" texto="Projeto" />
                <Link_header fechaMenu={ativaMenu} caminho="/listas" texto="Listas" />
                <Link_header fechaMenu={ativaMenu} caminho="/up-img" texto="imagens" />
            </div>
            <div className="mx-6 sm:mx-3 h-8 relative sm:absolute sm:right-10">
                <ToggleTheme />
            </div>
        </div>
    )
}