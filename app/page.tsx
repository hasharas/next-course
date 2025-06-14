
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
        <Link
          href="/users/about"
          className="pageLink block px-4 py-2 bg-green-500 text-white rounded"
          style={{
            boxShadow:
              '10px 8px #08b36c45, 20px 20px #03852b00, 2px 1px #0000, 15px 16px #178b2754, 0 1px 3px 0 rgb(0 125 41 / 0%), 0 1px 2px -1px rgb(0 153 44 / 0%)',
          }}
        >
          About Page
        </Link>

        {/* <AddtoCart /> */}
        <CartProuduct />
      </div>


    </main>
  )
}
