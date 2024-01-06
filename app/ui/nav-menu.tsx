import Link from "next/link";
import Image from "next/image";
import { Users } from "@phosphor-icons/react/dist/ssr";
import { SignInButton, SignOutButton } from "./buttons";
import { getServerSession } from "next-auth";
import NavLinks from "./nav-links";

export default async function NavMenu() {
  const session = await getServerSession()

  return (
    <div className="bg-blue text-white">
      <nav className="flex h-16 items-center justify-between w-11/12 m-auto">
        <Link href="/">
          <div className="flex gap-1 items-center">
            <Users size={32} />
            <h1>Myspace</h1>
          </div>
        </Link>
        <ul className="list-none flex items-center gap-5 transition-all">
          <NavLinks />
          <li>
            <SignInButton />
          </li>
          {session && (
            <li>
              <SignOutButton />
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}