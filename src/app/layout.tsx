import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import Providers from '~/components/providers'
import { cn } from '~/lib/utils'
import '~/styles/markdown-style.css'
import '~/styles/globals.css'
import { Toaster } from '~/components/ui/sonner'


const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontBricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
}); 


export const metadata: Metadata = {
  title: 'Podium',
  description: 'Build your website with resume and AI.',
  icons: {
    icon: '/pulpitlogo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(fontInter.variable, fontBricolageGrotesque.variable)} suppressHydrationWarning>
      <body className="min-h-screen h-full bg-background antialiased" style={{ fontFamily: 'var(--font-bricolage-grotesque), ui-sans-serif, system-ui, sans-serif' }}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
