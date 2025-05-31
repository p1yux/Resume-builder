'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import Cookies from 'js-cookie'
import { apiClient } from '~/lib/client'
import { LoginSchema } from './utils' // adjust path as needed

export function useLogin() {
  const router = useRouter()

  const loginMutation = useMutation({
    mutationFn: async (payload: LoginSchema) => {
      const { data } = await apiClient.post('/auth/login/', payload, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken') as string,
        },
      })
      return data
    },
    onSuccess: () => {
      toast.success('Login successful')
      router.push('/dashboard')
    },
    onError: () => {
      toast.error('Login failed')
    },
  })

  return loginMutation
}
