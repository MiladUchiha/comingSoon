import "aos/dist/aos.css";
import {Toaster } from 'sonner'
import Animation from '../context/Animation'
import '../../public/main.scss'
import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ['300','400','500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({ children }) {
  
  return (
    <html  lang="en" className={roboto.className} >
      <body  >
        <Animation>
        <div >
        <Toaster richColors/> {children}</div>
        </Animation>
      </body>
    </html>
  )
}
