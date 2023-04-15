import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/atoms/AddButton'

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='max-w-6xl mx-auto p-3'>
      <h2 className='text-4xl text-white font-bold mb-8'>
        Welcome
      </h2>
      <Button>
        Add Notes
      </Button>
    </div>
  )
}
