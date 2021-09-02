import React from 'react'

const SearchResults = ({ results }) => {
    console.log(results);
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-sm mb-5 mt-3">About {results.searchInformation?.formattedTotalresults} results ({results.searchInformation?.formattedSearchTime} seconds)</p>

            {results.items?.map((result) => (
                <div key={result.links} className="max-w-xl mb-8">
                    <div>
                        <a href={result.link} className="text-sml">
                            {result.formattedUrl}
                        </a>
                        <a href={result.link}>
                            <h2 className="truncate text-xl text-blue-800 font-medium group">
                                {result.title}
                            </h2>
                        </a>
                    </div>
                    <p>{result.snippet}</p>
                </div>
            ))}
        </div>
    )
}

export default SearchResults
