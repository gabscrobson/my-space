import { getServerSession } from 'next-auth'
import Image from 'next/image'

export default async function Page() {
  const session = await getServerSession()

  if (session) {
    return (
      <div>
        <h1>My Space</h1>
        <p>Welcome, {session.user?.name}</p>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>My Space</h1>
        <p>Welcome, stranger</p>
      </div>
    )
  }
}
