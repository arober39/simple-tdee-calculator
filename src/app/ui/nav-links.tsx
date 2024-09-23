'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav className="fixed w-full h24 shadow-xl bg-purple-400 h-12">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
            <div className="text-xl px-36">
                <Link className={`link ${pathname === '' ? 'active' : ''}`} href="/">
                    <h1 className="text-white">Simple TDEE Calculator</h1>
                </Link>
            </div>
            <div>
                <ul className="hidden sm:flex px-36">
                <Link
                    className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">
                    <li className="ml-10 hover:border-b text-l text-white"> About </li>
                </Link>
                <Link className={`link ${pathname === '/faq' ? 'active' : ''}`} href="/faq">
                    <li className="ml-10 hover:border-b text-l text-white"> FAQ </li>
                </Link>
                <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">
                    <li className="ml-10 hover:border-b text-l text-white"> Contact </li>
                </Link>
                </ul>
            </div>
      </div>
    </nav>
  )
}
