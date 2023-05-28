"use client"

import React from 'react'
import { Icons } from '../icons'
import { Drawer, IconButton, InputBase } from '@mui/material'
import { useDebouncedValue } from '@/hooks/use-debounced-value'

function MobileSearch() {
    const [open, setOpen] = React.useState(false)
    const [searchQuery, register] = useDebouncedValue("")

    React.useEffect(() => {
        if(!searchQuery) return


    },[searchQuery])

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
            >
                <div
                className='min-h-screen'>
                    <div
                    className='sticky top-0 flex mx-4 mt-1 py-2 gap-2 border-[0px] border-b border-lt-primary-main border-solid'>

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


                </div>
            </Drawer>
        </>
    )
}

export default MobileSearch