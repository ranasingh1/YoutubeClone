import React from 'react'
import {  useSearchParams } from 'react-router-dom'

const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const search_query = searchParams.get('search_query')
  return (
    <div className='w-full mt-16 pt-10 justify-center'>
        <div className=''>
        {search_query}
        </div>
        </div>
  )
}

export default SearchResult