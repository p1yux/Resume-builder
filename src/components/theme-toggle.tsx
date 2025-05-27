'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { Button } from '~/components/ui/button'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Monitor className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />
      case 'dark':
        return <Moon className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  const getTooltipText = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode'
      case 'dark':
        return 'Switch to system mode'
      default:
        return 'Switch to light mode'
    }
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="h-9 w-9" 
      onClick={cycleTheme}
      title={getTooltipText()}
    >
      {getIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 