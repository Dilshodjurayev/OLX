import React, { useState } from 'react'
import { useEffect } from 'react'
import instance from '../api/instance'

function useFetchData(ENDPOINT) {
    const [data , setData] = useState([])
    const [isLoading , setIsLoading] = useState([false])
    useEffect(() => {
        setIsLoading(true)
        instance.get(ENDPOINT)
            .then(response =>{ 
                setData(response.data)
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err)
                setIsLoading(true)
            })
      } , [])
      return [data , isLoading]
}

export default useFetchData
