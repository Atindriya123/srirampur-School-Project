// app/layout.tsx
import Header from '@/components/Header'
import { Providers } from './providers'
import Footer from '@/components/Footer'
import CopyRight from '@/components/CopyRight'
import NextAuthSessionProvider from '@/providers/sessionProvider'
export const metadata = {
  title: 'Ghughubesia Junior High School',
  description: 'Discover Ghughu Besia New Setup UP SCH, a government-aided co-educational school in Haora, West Bengal. Established in 2008, the school is recognized by the West Bengal Board of Secondary Education and is currently in the process of upgrading to a Secondary School. Offering Grades 5 to 8 with Bengali and English instruction, the school boasts smart classrooms, a library, computer-aided learning, and engaging extracurriculars like Bharat Scouts and Guides, free music, and tabla lessons. With a focus on holistic development and ongoing improvements, Ghughu Besia is dedicated to providing quality education in a safe and vibrant environment.',
}
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <NextAuthSessionProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
            <CopyRight />
          </Providers>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}