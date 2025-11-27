import { Block } from 'payload'

export const CallToAction: Block = {
    slug: 'cta',
    interfaceName: 'CallToActionBlock',
    fields: [
        {
            label: 'Highlight',
            name: 'highlight',
            type: 'text',
            required: true,
        },
        {
            label: 'Title',
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            label: 'Text',
            name: 'text',
            type: 'richText',
            required: true,
        },
        {
            label: 'Image',
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
    ],
}
