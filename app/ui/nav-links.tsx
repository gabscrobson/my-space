'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

const links = [
  {name: "About", href: "/about"},
  {name: "Blog", href: "/blog"},
  {name: "Users", href: "/users"},
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map(({name, href}) => (
        <li key={name}>
          <Link 
            href={href}
            className={clsx("border-b-2 border-transparent hover:border-white transition-colors",
              pathname === href && "border-white")}
          >
            {name}
          </Link>
        </li>
      ))}
    </>
  )
}