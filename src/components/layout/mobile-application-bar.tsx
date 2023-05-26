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
    className='border-[0px] border-b border-neutral-200/75 top-0 bg-white font-[inherit]'
    variant='outlined'
    >
      <Toolbar variant='dense' className='flex flex-col items-start'>
        <div 
        className='flex items-center justify-between w-full py-1'>
          <MobileMenu/>

          <Icons.Logo className="text-orange-500 w-[21px]"/>

          <IconButton>
            <Icons.Question className='text-[21px]'/>
          </IconButton>
        </div>
        
        <Divider variant='fullWidth' className="w-full border-neutral-200/75"/>
        
        <div className='flex w-full items-center justify-between gap-4 py-2'>

          <MobileSearch/>

          <div
          className='flex items-center gap-2 h-full'
          >
            { status === "unauthenticated" ?
            <Link href="/login" className="no-underline">
              <IconButton className="flex gap-1 font-[inherit]">
                  <Icons.LoginOutline className='text-[21px]'/>
                  <Typography component="p" className="text-[14px] font-[inherit] text-neutral-500 font-medium">Login</Typography>
              </IconButton>
            </Link> : 
            status === "loading" ? 
              <Skeleton variant='circular' className="w-[30px] h-[30px]" /> :
              <Avatar className='w-[30px] h-[30px] flex-shrink-0' alt={data?.user?.name ?? ""} src={data?.user?.image ?? ""}/>
            }

            <Divider variant='middle' orientation='vertical' className='h-[21px]'/>

            <IconButton>
              <Badge badgeContent={0} color='primary'>
                <Icons.CartOutline className='text-[21px]'/>
              </Badge>
            </IconButton>
          </div>
        </div>

        <Divider variant='fullWidth' className="w-full border-neutral-200/75"/>

        <MobileLocation/>
        
      </Toolbar>
    </AppBar>
  )
}

export default MobileApplicationBar