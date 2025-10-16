import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1.5 sm:gap-2 relative z-10 group">
      <div className="relative w-32 h-8 sm:w-40 sm:h-10">
        <img
          src="/tanti-automatics-logo.png"
          alt="Tanti Automatics Pvt. Ltd. Logo"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform"
        />
      </div>
    </Link>
  )
}
