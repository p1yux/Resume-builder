'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },

  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'GitHub',
      href: '#',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:hello@podium.com',
      icon: Mail,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8 overflow-hidden rounded-md">
                <Image
                  src="/pulpitlogo.png"
                  alt="Podium Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold">Podium</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Build professional resumes with AI assistance. 
              Stand out from the crowd and land your dream job faster.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Podium. All rights reserved.
          </p>
          
          <div className="mt-4 sm:mt-0">
            <p className="text-sm text-muted-foreground">
              Made with ❤️ for job seekers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 