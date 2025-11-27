import type { CallToActionBlock as CallToActionBlockProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {
    className?: string
} & CallToActionBlockProps

export const CallToActionBlock: React.FC<Props> = ({ highlight, title, text, image }) => {
    return (
        <>
            <div className="py-14 md:py-20">
                <div className="container">
                    <div className="grid grid-cols-12 items-center gap-y-6 gap-x-6 lg:gap-x-12">
                        <div className="col-span-12 md:col-span-5">
                            <p className="text-limed-oak-500 uppercase font-semibold mb-4">
                                {highlight}
                            </p>
                            <h2>{title}</h2>
                            <div className="pt-6">
                                <RichText data={text} />
                            </div>
                            <div className="pt-6">
                                <Button variant="default" asChild>
                                    <Link href="#contact">Kontakt</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-7 2xl:col-span-6 2xl:col-start-7">
                            {typeof image === 'object' && (
                                <div>
                                    <Image
                                        src={image?.url || ''}
                                        alt="Background texture"
                                        width={1000}
                                        height={1000}
                                        className="rounded-xl object-cover w-full h-auto"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
