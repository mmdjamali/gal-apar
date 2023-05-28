"use client"

import React from 'react'
import { Icons } from '../icons'
import { Drawer, IconButton, InputBase } from '@mui/material'
import { useDebouncedValue } from '@/hooks/use-debounced-value'
import Link from 'next/link'

function MobileSearch() {
    const [open, setOpen] = React.useState(false)
    const [searchQuery, register] = useDebouncedValue("")

    React.useEffect(() => {
        if(!searchQuery) return


    },[searchQuery])

    const searched = searchValues.filter(v => v.search(searchQuery) >= 0)
    

    return (
        <>
            <IconButton
            className='text-lt-accent-main'
            onClick={() => {
                setOpen(true)
            }}>
                <Icons.Search className='text-[21px]'/>
            </IconButton>

            <Drawer
            anchor='bottom'
            open={open}
            onClose={() => {

            }}
            className=''
            >
                <div
                className='min-h-screen overflow-auto relative'>
                    <div
                    className='sticky top-0 flex px-4 pb-2 pt-3 gap-2 border-[0px] bg-common-white border-b border-lt-primary-main border-solid'>

                        <InputBase
                        placeholder='Search...'
                        ref={(node : Element) => {
                            if(open && node){
                                node.querySelector("input")?.focus()
                            }
                        }}
                        {...register()}
                        className='w-full text-[12px] caret-lt-primary-main'/>

                        <IconButton
                        className="text-lt-accent-main p-0"
                        onClick={() => {
                            setOpen(false)
                        }}>
                            <Icons.ChevronRight
                            className="text-[25px]"/>
                        </IconButton>

                    </div>

                    { searched.length ? 
                    <div className='flex flex-col py-2 gap-2 px-4 items-start'>
                        {searched.map((value, idx) => (
                            <Link className='text-lt-accent-main/80 flex items-center no-underline justify-start gap-1' key={idx} href={`/search?query=${value}`}>
                                <p className='text-[14px]'>
                                    {value}
                                </p>
                                <Icons.ChevronRight className='text-[14px]'/>
                            </Link>
                        ))}
                    </div> : null}
                </div>

            </Drawer>
        </>
    )
}

export default MobileSearch

const searchValues = "If you're developing an application, you'll want to make sure you're testing it under conditions that closely simulate a production environment. In production, you'll have an army of users banging away at your app and filling your database with data, which puts stress on your code. If you're hand-entering data into a test environment one record at a time using the UI, you're never going to build up the volume and variety of data that your app will accumulate in a few days in production. Worse, the data you enter will be biased towards your own usage patterns and won't match real-world usage, leaving important bugs undiscovered.".split(" ")
