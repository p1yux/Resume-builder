import { Navigation, Hero, Features, HowItWorks, Footer } from '~/components/landing'
import { redirect } from 'next/navigation'
import { isAuthenticated as isAuthenticatedFn} from '~/lib/auth'


export default async function Home() {

  const isAuthenticated = await isAuthenticatedFn()
  if(isAuthenticated) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
