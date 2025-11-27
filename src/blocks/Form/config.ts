import { Block } from 'payload'

export const Form: Block = {
    slug: 'form',
    interfaceName: 'FormBlock',
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
            label: 'Form',
            name: 'form',
            type: 'relationship',
            relationTo: 'forms',
            required: true,
        },
    ],
}
