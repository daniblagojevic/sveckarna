import type { HeroBlock as HeroBlockProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {
    className?: string
} & HeroBlockProps

export const HeroBlock: React.FC<Props> = ({ title, text, image1, image2, image3 }) => {
    return (
        <>
            <div className="bg-spring-wood-50 pt-6 md:pt-14 pb-20 relative">
                <div className="absolute bottom-0 end-0 z-0">
                    <Image
                        src="/api/media/file/line_2.png"
                        alt="Background texture"
                        width={600}
                        height={600}
                        className="w-96"
                    />
                </div>
                <div className="container relative">
                    <div className="grid grid-cols-12 gap-y-6 md:gap-y-12 gap-x-0 md:gap-12">
                        <div className="col-span-12 md:col-span-6">
                            <div className="pb-4 md:pb-12">
                                <h1 className="font-mollie-glaston font-light text-5xl lg:text-6xl xl:text-[5rem]">
                                    {title}
                                </h1>
                            </div>
                            <div className="max-w-lg hidden md:block">
                                {typeof image1 === 'object' && (
                                    <Image
                                        src={image1.url ?? ''}
                                        alt={image1.alt ?? ''}
                                        width={1000}
                                        height={1000}
                                        className="w-full rounded-xl"
                                    />
                                )}
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="pb-6 md:pb-12">
                                <div className="w-full">
                                    <div className="">
                                        {typeof image2 === 'object' && (
                                            <Image
                                                src={image2.url ?? ''}
                                                alt={image2.alt ?? ''}
                                                width={1000}
                                                height={1000}
                                                className="w-2/3 rounded-xl ms-auto"
                                            />
                                        )}
                                    </div>
                                    <div className="-mt-[50%]">
                                        {typeof image3 === 'object' && (
                                            <Image
                                                src={image3.url ?? ''}
                                                alt={image3.alt ?? ''}
                                                width={1000}
                                                height={1000}
                                                className="w-2/3 rounded-xl"
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="pb-6 md:pb-12">
                                <RichText data={text} />
                            </div>
                            <div>
                                <Button variant="default" asChild>
                                    <Link href="#contact">Kontakt</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
