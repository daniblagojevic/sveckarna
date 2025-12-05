import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import { Hero } from '@/blocks/Hero/config'
import { Gallery } from '@/blocks/Gallery/config'
import { Testimonial } from '@/blocks/Testimonial/config'
import { CallToAction } from '@/blocks/CallToAction/config'
import { Form } from '@/blocks/Form/config'
import {
    MetaDescriptionField,
    MetaImageField,
    MetaTitleField,
    OverviewField,
    PreviewField,
} from '@payloadcms/plugin-seo/fields'

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
            type: 'tabs',
            tabs: [
                {
                    label: 'Content',
                    fields: [
                        {
                            name: 'layout',
                            type: 'blocks',
                            required: false,
                            blocks: [Hero, Gallery, Testimonial, CallToAction, Form],
                        },
                    ],
                },
                {
                    label: 'SEO',
                    name: 'meta',
                    fields: [],
                },
            ],
        },
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        slugField(),
    ],
}
