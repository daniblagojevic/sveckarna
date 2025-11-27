import React from 'react'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})
const mollieGlaston = localFont({
    src: '../../../public/fonts/MollieGlaston.ttf',
    variable: '--font-mollie-glaston',
})

export const metadata = {
    description: 'A blank template using Payload in a Next.js app.',
    title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
    const { children } = props

    return (
        <html
            className={`${inter.variable} ${mollieGlaston.variable} scroll-smooth`}
            lang="en"
            suppressHydrationWarning
        >
            <head>
                <link href="/api/media/file/favicon.ico" rel="icon" sizes="32x32" />
            </head>
            <body className="font-inter">
                <Header />
                <main className="min-h-[80vh]">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
