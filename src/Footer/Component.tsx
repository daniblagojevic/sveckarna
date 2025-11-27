import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export async function Footer() {
    return (
        <>
            <footer>
                <div className="py-14 md:py-20 bg-spring-wood-50 text-sm text-masala-900">
                    <div className="container text-center">
                        <div className="mb-3">
                            <span className="inline-flex items-center gap-x-2 text-3xl font-mollie-glaston">
                                <Image
                                    alt="Payload Logo"
                                    width={50}
                                    height={50}
                                    decoding="async"
                                    src="/api/media/file/logo.png"
                                    className="h-12 w-12"
                                />
                                Sveckarna
                            </span>
                        </div>
                        <div className="mb-3">
                            <div className="mb-2">
                                <a
                                    href="mailto: info@sveckarna.si"
                                    className="flex gap-2 items-center justify-center hover:underline w-fit m-auto"
                                >
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span>info@sveckarna.si</span>
                                </a>
                            </div>
                            <div className="">
                                <a
                                    href="tel: +386 40 040 040"
                                    className="flex gap-2 items-center justify-center hover:underline w-fit m-auto"
                                >
                                    <FontAwesomeIcon icon={faPhone} />
                                    <span>(0)40 040 040</span>
                                </a>
                            </div>
                        </div>
                        <div className="">
                            <p className="">© {new Date().getFullYear()} Sveckarna.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
