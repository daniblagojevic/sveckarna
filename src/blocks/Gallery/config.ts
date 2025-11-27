import { Block } from 'payload'

export const Gallery: Block = {
    slug: 'gallery',
    interfaceName: 'GalleryBlock',
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
        /* */
        {
            label: 'Images',
            name: 'images',
            type: 'array',
            required: true,
            fields: [
                {
                    label: 'Image',
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
    ],
}
