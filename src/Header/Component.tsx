import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export async function Header() {
    return (
        <header className="bg-spring-wood-50 py-3 relative">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <div className="">
                        <Link className="flex-none" href="/" aria-label="Brand">
                            <span className="inline-flex items-center gap-x-2 text-3xl font-juana">
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
                        </Link>
                    </div>
                    <div className="">
                        <Button variant="default" asChild>
                            <Link href="#contact">Kontakt</Link>
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
