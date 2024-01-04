import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-full flex items-center justify-center'>
      <div className='flex gap-1 items-center flex-col'>
        <h2 className='font-semibold text-3xl'>Not Found 404</h2>
        <Link href="/" className='font-medium text-blue hover:text-blueLight transition-color'>Return Home</Link>
      </div>
    </div>
  )
}