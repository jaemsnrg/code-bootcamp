import './globals.css'
import { Heebo, Handjet } from 'next/font/google'

const heebo = Heebo({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-heebo',
})
const handjet = Handjet({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-handjet',
})


export const metadata = {
  title: 'Hyperion Dev',
  description: 'Get your future in tech kick-started with us',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${heebo.variable} ${handjet.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
