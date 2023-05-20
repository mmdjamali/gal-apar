"use client"

import React from 'react'
import { AppBar, Badge, Divider, IconButton, InputBase, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { Icons } from '../icons'
import MobileSearch from './mobile-search'

function MobileApplicationBar() {  
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
          <IconButton>
            <Icons.Menu className="text-[21px]"/>
          </IconButton>

          <IconButton>
            <Icons.Question className='text-[21px]'/>
          </IconButton>
        </div>
        
        <Divider variant='fullWidth' className="w-full border-neutral-200/75"/>
        
        <div className='flex w-full items-center justify-between gap-4 py-2'>
          {/* <div
          className='flex items-center bg-neutral-100 px-4 py-1 w-full gap-1 rounded-lg text-neutral-500'>
            <Icons.Search className='text-[21px] text-inherit flex-shrink-0'/>
            <InputBase
            placeholder='Search...' 
            className='text-[14px] w-full flex-shrink text-inherit'/>
          </div> */}

          <MobileSearch/>

          <div
          className='flex items-center gap-2 h-full'
          >
            <IconButton className="flex gap-1">
                <Icons.LoginOutline className='text-[21px]'/>
                <Typography component="p" className="text-[14px] text-neutral-500 font-medium">Login</Typography>
            </IconButton>

            <Divider variant='middle' orientation='vertical' className='h-[21px]'/>

            <IconButton>
              <Badge badgeContent={0} color='primary'>
                <Icons.CartOutline className='text-[21px]'/>
              </Badge>
            </IconButton>
          </div>
        </div>

        <Divider variant='fullWidth' className="w-full border-neutral-200/75"/>

        <div className='flex w-full items-center justify-between py-2 cursor-pointer'>
          <div className="flex items-center gap-2">
            <Icons.Map className="text-[21px] text-yellow-500"/>

            <Typography className="text-neutral-600 text-[12px] select-none">
              Choose your location
            </Typography>
          </div>

          <Icons.ChevronRight className='text-[21px] text-neutral-500'/>

        </div>
      </Toolbar>
    </AppBar>
  )
}

export default MobileApplicationBar