import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import React, { useRef } from 'react'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

const SearchHeader = () => {
    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = e => {
        e.preventDefault()
    
        const term = searchInputRef.current.value
    
        if (!term) return
    
        router.push(`/search?term=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image 
                src="/google_logo.png"
                height="40"
                width="120"
                className="cursor-pointer"
                onClick={() => router.push("/")}
                />

                <form className="flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 flex-grow">
                    <input ref={searchInputRef} type="text" className="flex-grow w-f focus:outline-none" />
                    <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition transform duration-100 hover:scale-125" onClick={() => (searchInputRef.current.value = "")} />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300"/>
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
                    <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar className="ml-auto" url="/profile.jpg"/>
            </div>
            
            <HeaderOptions />
        </header>
    )
}

export default SearchHeader
