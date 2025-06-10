
import Link from 'next/link'
import AddtoCart from './users/components/AddtoCart'
import CartProuduct from './users/components/CartProuduct'

export default function Home() {
  return (
    <main className="">

      <h1 className="text-2xl font-black text-blue-600">Hello World</h1>

      <p className='font-black'>helloo </p>
      <div className="flex flex-col items-center space-y-4">
        <Link href="/users" className="block px-4 py-2 bg-blue-500 text-white rounded">
          User Page
        </Link>
        <Link href="/users/about" className="block px-4 py-2 bg-green-500 text-white rounded">
          About Page
        </Link>

        {/* <AddtoCart /> */}
        <CartProuduct />
      </div>
      

    </main>
  )
}
