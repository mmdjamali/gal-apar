import { Drawer, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Icons } from '../icons'

function MobileLocation() {
    const [open, setOpen] = React.useState<boolean>(false)

    return (
        <>
            <div 
            onClick={() => {
                setOpen(true)
            }}
            className='flex w-full items-center justify-between py-2 cursor-pointer'>
                <div className="flex items-center gap-2">
                    <Icons.Map className="text-[21px] text-yellow-500"/>

                    <Typography className="text-neutral-600 text-[12px] select-none">
                    Choose your location
                    </Typography>
                </div>

                <Icons.ChevronRight className='text-[21px] text-neutral-500'/>

            </div>

            <Drawer
            anchor='bottom'
            onClose={() => {}}
            open={open}>
                <div
                className='min-h-screen relative'>
                    <div className="flex items-center justify-between mx-4 py-3">
                        <Typography variant='body2' className='leading-none'>
                           Choose Your Location
                        </Typography>
                        
                        <IconButton
                        onClick={() => {
                            setOpen(false)
                        }}
                        className="p-0">
                            <Icons.Close className="test-[25px]"/>
                        </IconButton>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default MobileLocation