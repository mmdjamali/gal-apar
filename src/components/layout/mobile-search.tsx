"use client"

import React from 'react'
import { Icons } from '../icons'
import { IconButton, InputBase, SwipeableDrawer } from '@mui/material'

function MobileSearch() {
    const [open, setOpen] = React.useState(false) 

    return (
        <>
            <div
            onClick={() => {
                setOpen(true)
            }}
            className='flex items-center cursor-pointer bg-neutral-100 px-4 py-2 w-full gap-1 rounded-lg text-neutral-500'>
                <Icons.Search className='text-[21px] text-inherit flex-shrink-0'/>
                <span
                className='text-[12px] w-full flex-shrink text-inherit'>
                    Search...
                </span>
            </div>

            <SwipeableDrawer
            anchor='bottom'
            open={open}
            onOpen={(e) => {
            }}
            onClose={() => {

            }}
            >
                <div
                className='min-h-screen'>
                    <div
                    className='flex mx-4 mt-1 py-2 gap-2 border-[0px] border-b border-red-500 border-solid'>

                            <IconButton 
                            onClick={() => {
                                setOpen(false)
                            }}
                            className='p-0'>
                                <Icons.ArrowLeft 
                                className="text-[25px]"/>
                            </IconButton>

                        <InputBase
                        ref={(node : Element) => {
                            if(open && node){
                                node.querySelector("input")?.focus()
                            }
                        }}
                        className='w-full text-[12px] caret-red-500'/>
                    </div>
                </div>
            </SwipeableDrawer>
        </>
    )
}

export default MobileSearch