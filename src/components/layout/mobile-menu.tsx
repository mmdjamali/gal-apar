import { Divider, IconButton, SwipeableDrawer } from '@mui/material'
import React from 'react'
import { Icons } from '../icons'

function MobileMenu() {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <IconButton
            onClick={() => {
                setOpen(true)
            }}>
                <Icons.Menu className="text-[21px]"/>
            </IconButton>

            <SwipeableDrawer
            sx={{
                "& .MuiPaper-root" : {
                    width : "min(100%,320px)"
                }
            }}
            open={open}
            onOpen={() => {setOpen(true)}}
            onClose={() => {setOpen(false)}}>
                <div
                className='flex flex-col w-full relative px-4'>
                    <div className='py-1 flex items-center justify-between'>
                        <IconButton
                        onClick={() => {
                            setOpen(false)
                        }}>
                            <Icons.Close className="text-[21px]"/>
                        </IconButton>
                    </div>

                    <Divider variant="fullWidth" className="border-neutral-200/75"/>

                </div>
            </SwipeableDrawer>
        </>
    )
}

export default MobileMenu