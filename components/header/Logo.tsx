import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1.5 sm:gap-2 relative z-10 group">
      <div className="relative w-32 h-8 sm:w-40 sm:h-10">
        <Image
          src="/tanti-automatics-logo.png"
          alt="Tanti Automatics Pvt. Ltd. Logo"
          fill
          className="w-full h-full object-contain group-hover:scale-105 transition-transform"
          loading="eager"
          priority
          sizes="(max-width: 640px) 128px, 160px"
        />
      </div>
    </Link>
  )
}
