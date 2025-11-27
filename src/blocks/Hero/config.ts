import { Block } from 'payload'

export const Hero: Block = {
    slug: 'hero',
    interfaceName: 'HeroBlock',
    fields: [
        {
            label: 'Title',
            name: 'title',
            type: 'text',
            required: true,
            //defaultValue: '<placeholder>',
        },
        {
            label: 'Text',
            name: 'text',
            type: 'richText',
            required: true,
            //defaultValue: '<placeholder>',
        },
        {
            label: 'Image 1',
            name: 'image1',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            label: 'Image 2',
            name: 'image2',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            label: 'Image 3',
            name: 'image3',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
    ],
}
