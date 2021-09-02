import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import React from 'react'
import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'

const Search = ({ results }) => {
    console.log(results);
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
            </Head>

            <SearchHeader />

            <SearchResults results={results} />
        </div>
    )
}

export default Search

export async function getServerSideProps(context) {
    const startIndex = context.query.start || "0"
    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json())

    return {
        props: {
            results: data
        }
    }
}
