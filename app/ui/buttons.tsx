'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import Image from "next/image"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="bg-white text-blue rounded-sm p-1 hover:bg-slate-300" {...props}>
      {children}
    </button>
  )
}

export function SignInButton() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (<></>)
  }

  if (status === 'authenticated') {
    return (
      <Link href="/dashboard">
        <Image
          src={session.user?.image ?? "/default-avatar.webp"}
          alt="User avatar"
          width={32}
          height={32}
          className="rounded-full cursor-pointer"
        />
      </Link>
    )
  }
  
  return (
    <Button 
      onClick={() => signIn()}
    >
      Sign In
    </Button>)
}

export function SignOutButton() {
  return (
    <Button 
      onClick={() => signOut()}
    >
      Sign Out
    </Button>
  )
}