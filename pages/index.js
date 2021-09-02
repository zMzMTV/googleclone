import { useRef } from 'react'
import Head from 'next/head'
import HomeHeader from '../components/HomeHeader'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon } from '@heroicons/react/solid'
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router'

export default function Home() {
  const searchInputRef = useRef(null)
  const router = useRouter()

  const search = e => {
    e.preventDefault()

    const term = searchInputRef.current.value

    if (!term) return

    router.push(`/search?term=${term}`)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Google search clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeHeader />

      <form className="flex flex-col mt-44 items-center flex-grow w-4/5">
        <Image 
          src="/google_logo.png" 
          width="300"
          height="100"
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input 
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5"/>
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>

          <button onClick={search} className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  )
}
