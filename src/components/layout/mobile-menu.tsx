import { Divider, Drawer, IconButton, SwipeableDrawer, Typography } from '@mui/material'
import React from 'react'
import { Icons } from '../icons'
import Link from 'next/link'

function MobileMenu() {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <IconButton
            className='text-lt-accent-main'
            onClick={() => {
                setOpen(true)
            }}>
                <Icons.Menu className="text-[21px]"/>
            </IconButton>

            <Drawer
            sx={{
                "& .MuiPaper-root" : {
                    width : "min(100%,320px)"
                }
            }}
            open={open}
            onClose={() => {setOpen(false)}}>
                <div
                className='flex flex-col w-full relative px-4'>
                    <div className='py-1 flex items-center justify-between'>
                        <Icons.Logo className='h-[21px] text-lt-primary-main'/>

                        <IconButton
                        className="text-lt-accent-main"
                        onClick={() => {
                            setOpen(false)
                        }}>
                            <Icons.Close className="text-[21px]"/>
                        </IconButton>
                    </div>


                    <div className='flex flex-col gap-4 py-3'>
                        {directLinks.map(({ title , url }, idx) => (
                            <Link key={idx} href={url} className='flex group items-center justify-start gap-1  text-lt-accent-main/90 no-underline'>
                                <p
                                className='text-[12px]'>
                                    {title}
                                </p>

                                <Icons.ChevronRight className="text-[14px] group-hover:translate-x-1 transition-transform"/>
                            </Link>
                        ))}
                    </div>
                    <Divider variant="fullWidth" className="border-lt-accent-main/10"/>

                    <div className='flex flex-col gap-4 pt-3'>
                        <h3 className='text-lt-accent-main text-[14px]'>
                            Categories
                        </h3>

                        {categories.map(({title}, idx) => (
                            <div key={idx} className='flex items-center justify-start gap-1  text-lt-accent-main/90'>
                                <p className='text-[12px]'>
                                    {title}
                                </p>

                                <Icons.ChevronDown className="text-[14px]"/>
                            </div>
                        ))}
                    </div>

                </div>
            </Drawer>
        </>
    )
}

export default MobileMenu

const directLinks = [
    {
        title : "Discounts and offers",
        url : ""
    },
    {
        title : "Customer club",
        url : ""
    },
    {
        title : "About us",
        url : ""
    },
]

const categories = [
    {
        title : "Phone",
    },
    {
        title : "Fashion",
    },
    {
        title : "Cars",
    },
    {
        title : "Sport",
    }
]