"use client"

import React from 'react'
import { Icons } from '../icons'
import { Drawer, IconButton, InputBase } from '@mui/material'

function MobileSearch() {
    const [open, setOpen] = React.useState(false) 

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
                    className='flex mx-4 mt-1 py-2 gap-2 border-[0px] border-b border-lt-primary-main border-solid'>

                            <IconButton
                            className="text-lt-accent-main p-0"
                            onClick={() => {
                                setOpen(false)
                            }}>
                                <Icons.ArrowLeft 
                                className="text-[25px]"/>
                            </IconButton>

                        <InputBase
                        ref={(node : Element) => {
                            if(open && node){
                                node.querySelector("input")?.focus()
                            }
                        }}
                        className='w-full text-[12px] caret-lt-primary-main'/>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default MobileSearch