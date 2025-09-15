import { up } from 'up-fetch'
import { env } from '@/lib/env'

export const openDataParisApiClient = up(fetch, () => ({
    baseUrl: env.NEXT_PUBLIC_OPEN_DATA_PARIS_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000,
    retry: {
        attempts: 3,
        delay: 1000,
    },
    onRequest: (options) => {
        console.log('Request:', options)
    },
    onSuccess: (data, options) => {
        console.log('Response:', data, options)
    },
    onError: (error, options) => {
        console.log('Error:', error, options)
    },
}))