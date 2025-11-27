'use client'

import type { GalleryBlock as GalleryBlockProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import React from 'react'

import useFancybox from '@/lib/fancybox'

type Props = {
    className?: string
} & GalleryBlockProps

export const GalleryBlock: React.FC<Props> = ({ title, highlight, text, images }) => {
    const [fancyboxRef] = useFancybox({
        // Your custom options
    })

    return (
        <>
            <div className="py-14 md:py-20">
                <div className="container">
                    <div className="grid grid-cols-12 gap-4 lg:gap-8 items-end">
                        <div className="col-span-12 lg:col-span-5">
                            <p className="text-limed-oak-500 uppercase font-semibold mb-4">
                                {highlight}
                            </p>
                            <h2>{title}</h2>
                        </div>
                        <div className="col-span-12 lg:col-span-7">
                            <RichText data={text} />
                        </div>
                    </div>
                    {images && (
                        <div className="pt-8 lg:pt-12">
                            <div className="grid grid-cols-12 gap-2 sm:gap-4" ref={fancyboxRef}>
                                {images.map(({ image }, index) => (
                                    <div
                                        key={index}
                                        className="col-span-6 sm:col-span-4 xl:col-span-3"
                                    >
                                        {typeof image === 'object' && (
                                            <a data-fancybox="gallery" href={image?.url || ''}>
                                                <Image
                                                    src={image?.url || ''}
                                                    alt={image?.alt || ''}
                                                    width={image?.width || 800}
                                                    height={image?.height || 600}
                                                    className="w-full h-auto object-cover aspect-square rounded-xl"
                                                />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
