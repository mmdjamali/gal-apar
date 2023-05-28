import Providers from '@/components/providers'
import '../styles/globals.css'
import Loader from '@/components/loader'
// import { Inter, Roboto , Vazirmatn} from 'next/font/google'

// const inter = Inter({ subsets: ['latin'], weight : ["100","200","300","400","500","600","700","900"]})
// const roboto = Roboto({subsets : ["latin"],weight : ["100","300","400","500","700","900"]})
// const vazirmatn = Vazirmatn({subsets : ["latin"],weight : ["100",'200',"300","400","500",'600',"700",'800',"900"]})

// ${inter.className} ${roboto.className} ${vazirmatn.className}

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-medium`}>
        <Loader>
          <Providers>
              {children}
          </Providers>
        </Loader>
      </body>
    </html>
  )
}
