import Link from "next/link";
import Image from "next/image";
import { Users } from "@phosphor-icons/react/dist/ssr";

export default function NavMenu() {
  return (
    <div className="bg-blue text-white">
      <nav className="flex h-16 items-center justify-between w-11/12 m-auto">
        <Link href="/">
          <div className="flex gap-1 items-center group">
            <Users size={32} className="group-hover:animate-spin"/>
            <h1>Myspace</h1>
          </div>
        </Link>
        <ul className="list-none flex gap-5 transition-all">
          <li className="border-b-2 border-transparent hover:border-white transition-colors">
            <Link href="/about">About</Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-white transition-colors">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="border-b-2 border-transparent hover:border-white transition-colors">
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}