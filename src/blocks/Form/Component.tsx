import type { FormBlock as FormBlockProps } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import Form from '@/components/Form'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

type Props = {
    className?: string
} & FormBlockProps

export const FormBlock: React.FC<Props> = ({ highlight, title, text, form }) => {
    let formId = null
    if (typeof form === 'object' && form !== null) {
        formId = form.id
    }
    return (
        <>
            <div className="py-14 md:py-20" id="contact">
                <div className="container">
                    <div className="pb-8 lg:pb-12">
                        <div className="grid grid-cols-12 gap-4 md:gap-8 items-end">
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
                    </div>
                    <div className="bg-spring-wood-50 rounded-xl overflow-hidden">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 lg:col-span-4">
                                <div className="py-8 px-6 sm:p-12 bg-limed-oak-500 rounded-xl text-white relative overflow-hidden h-full">
                                    <div className="pb-4 md:pb-6 lg:pb-12">
                                        <p className="">
                                            Odgovorimo vam v najkrajšem možnem času in poskrbimo, da
                                            bo vaša izkušnja prijetna in enostavna.
                                        </p>
                                    </div>
                                    <div className="py-3">
                                        <a
                                            href="mailto:info@sveckarna.si"
                                            className="flex gap-2 items-center hover:underline w-fit"
                                        >
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <span>info@sveckarna.si</span>
                                        </a>
                                    </div>
                                    <div className="py-3">
                                        <a
                                            href="tel:+386 31 495 173"
                                            className="flex gap-2 items-center hover:underline w-fit"
                                        >
                                            <FontAwesomeIcon icon={faPhone} />
                                            <span>(0)31 495 173</span>
                                        </a>
                                    </div>
                                    <div className="absolute bottom-0 end-0 z-0 pointer-events-none">
                                        <Image
                                            src="/api/media/file/line_2.png"
                                            alt="Background texture"
                                            width={600}
                                            height={600}
                                            className="w-96"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-8">
                                <div className="p-6 md:p-12">
                                    {formId ? (
                                        <Form formId={String(formId)} />
                                    ) : (
                                        <div>No form selected</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
