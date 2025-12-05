// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { formBuilderPlugin, fields } from '@payloadcms/plugin-form-builder'
import { name, label, required, width, placeholder } from '@/plugins/formBuilder/fieldConfig'
//import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { resendAdapter } from '@payloadcms/email-resend'
import { seoPlugin } from '@payloadcms/plugin-seo'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
        meta: {
            icons: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    url: '/api/media/file/favicon.ico',
                },
                {
                    rel: 'apple-touch-icon',
                    type: 'image/png',
                    url: '/api/media/file/favicon.ico',
                },
            ],
        },
    },
    collections: [Users, Media, Pages],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
    sharp,
    plugins: [
        /**/
        seoPlugin({
            generateTitle: ({ doc }) => doc.title,
            generateDescription: ({ doc }) => doc.plaintext,
            generateURL: ({ doc, collectionSlug }) =>
                `https://example.com/${collectionSlug}/${doc.slug}`,
        }),
        formBuilderPlugin({
            fields: {
                text: {
                    fields: [
                        {
                            type: 'row',
                            fields: [name, label],
                        },
                        {
                            type: 'row',
                            fields: [placeholder, width],
                        },
                        {
                            type: 'row',
                            fields: [required],
                        },
                    ],
                },
                email: {
                    fields: [
                        {
                            type: 'row',
                            fields: [name, label],
                        },
                        {
                            type: 'row',
                            fields: [placeholder, width],
                        },
                        {
                            type: 'row',
                            fields: [required],
                        },
                    ],
                },
                textarea: {
                    fields: [
                        {
                            type: 'row',
                            fields: [name, label],
                        },
                        {
                            type: 'row',
                            fields: [placeholder, width],
                        },
                        {
                            type: 'row',
                            fields: [required],
                        },
                    ],
                },
            },
            formOverrides: {
                admin: {
                    group: 'Forms',
                },
            },
            formSubmissionOverrides: {
                admin: {
                    group: 'Forms',
                },
            },
        }),
    ],
    /*
    email: nodemailerAdapter({
        defaultFromAddress: 'info@sveckarna.si',
        defaultFromName: 'Svečkarna',
        // Nodemailer transportOptions
        transportOptions: {
            host: process.env.SMTP_HOST,
            port: 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        },
    }),
    */
    email: resendAdapter({
        defaultFromAddress: 'info@sveckarna.si',
        defaultFromName: 'Svečkarna',
        apiKey: process.env.RESEND_API_KEY || '',
    }),
})
