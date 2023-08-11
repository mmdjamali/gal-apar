"use client"

import React from 'react'
import { Icons } from './icons'

function Loader({
    children
} : { children : React.ReactNode}) {
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setLoading(false)
    },[])

    if(loading) return (
        <div
        className='w-full h-full grid place-items-center'>
            <Icons.Spinner className="text-[21px] animate-spin text-primary"/>
        </div>
    )

    return(
        <>
        {children}
        </>
    )
}

export default Loader