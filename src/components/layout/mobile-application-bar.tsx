"use client"

import React from 'react'
import { AppBar, Avatar, Badge, Divider, IconButton, InputBase, Skeleton, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { Icons } from '../icons'
import MobileSearch from './mobile-search'
import MobileLocation from './mobile-location'
import MobileMenu from './mobile-menu'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

function MobileApplicationBar() {  
  const { data, status, update } = useSession()

  return (
    <AppBar
    elevation={0}
    position='sticky'
    className='border-[0px] border-neutral-200/75 top-0 bg-white font-[inherit]'
    variant='outlined'
    >
      <Toolbar variant='dense' className='flex flex-col items-start p-0'>
        <div 
        className='flex items-center justify-between w-full py-1 px-4'>
          <MobileMenu/>

          <Icons.Logo className="text-lt-primary-main h-[21px]"/>
          
          <MobileSearch/>
        </div>
        
        <Divider variant='fullWidth' className="w-full border-lt-secondary-main px-4"/>
        
        <div className='flex w-full items-center justify-between gap-4 bg-lt-secondary-main px-4'>
          <MobileLocation/>

          <div
          className='flex flex-shrink-0 items-center gap-2 h-full text-lt-primary-main'
          >
            { status === "unauthenticated" ?
            <Link href="/login" className="no-underline text-[inherit]">
              <IconButton className="flex gap-1 font-[inherit] text-[inherit]">
                  <Icons.LoginOutline className='text-[21px]'/>
                  <Typography component="p" className="text-[12px] font-[inherit] font-medium">Login</Typography>
              </IconButton>
            </Link> : 
            status === "loading" ? 
              <Skeleton variant='circular' className="w-[30px] h-[30px]" /> :
              <Avatar className='w-[30px] h-[30px] flex-shrink-0' alt={data?.user?.name ?? ""} src={data?.user?.image ?? ""}/>
            }

            <Divider variant='middle' orientation='vertical' className='h-[21px] border-orange-500/25'/>

            <IconButton className="text-[inherit]">
              <Badge badgeContent={0} color='primary'>
                <Icons.CartOutline className='text-[21px]'/>
              </Badge>
            </IconButton>
          </div>
        </div>
        {/* <Divider variant='fullWidth' className="w-full border-neutral-200/75"/> */}
      </Toolbar>
    </AppBar>
  )
}

export default MobileApplicationBar