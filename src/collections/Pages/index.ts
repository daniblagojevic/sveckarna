import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import { Hero } from '@/blocks/Hero/config'
import { Gallery } from '@/blocks/Gallery/config'
import { Testimonial } from '@/blocks/Testimonial/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { Form } from '@/blocks/Form/config'

export const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    defaultPopulate: {
        title: true,
        slug: true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        slugField(),
        {
            name: 'layout',
            type: 'blocks',
            required: false,
            blocks: [Hero, Gallery, Testimonial, CallToAction, Form],
        },
    ],
}
