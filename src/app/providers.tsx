"use client"

import { ThemeProvider } from "@/components/theme/theme-provider"
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                disableTransitionOnChange
            >
                <NuqsAdapter>
                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>
                </NuqsAdapter>
            </ThemeProvider>
        </>
    );
}