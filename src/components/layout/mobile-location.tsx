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
            className='flex flex-shrink w-fit overflow-hidden items-center gap-1 justify-between py-2 cursor-pointer'>
                <Icons.Map className="text-[21px] text-lt-accent-main/75 flex-shrink-0"/>

                <Typography className="text-lt-accent-main/75 flex-shrink text-[12px] select-none font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                Choose your location
                </Typography>

                <Icons.ChevronRight className='text-[21px] text-lt-accent-main/75 flex-shrink-0'/>
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