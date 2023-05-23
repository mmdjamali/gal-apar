import { cn } from '@/lib/utils'
import { Chip, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Icons } from './icons'

interface props {
    className ?: string
}

function SpecialProduct({
    className
} : props) {
  return (
    <div
    className={cn(
        "relative w-full flex flex-col overflow-hidden p-2",
        className
    )}>
        <div
        className='relative w-full aspect-square rounded-md overflow-hidden'>
            <Image
            className='object-cover'
            src="data:image/jpeg;base64,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"
            alt=""
            fill={true}
            />
        </div>

        <div className='pt-1 flex flex-col'>
            <div
            className='flex items-center justify-between'>
                <div
                className='flex items-center gap-1 justify-center'>
                    <Icons.Dollar />
                    <Typography variant='body2' className="font-semibold">3.240</Typography>
                </div>

                <Chip
                sx={{
                    "& span" : {
                        padding : "0"
                    }
                }}
                color="primary" label="10%" size="small" 
                className='text-[11px] px-0 py-[2px] h-[20px] w-[34px]'/>
            </div>

            <div
            className='pl-5 relative mr-auto'>
                <Typography className='text-[12px] line-through text-neutral-300'>3.600</Typography>
            </div>
        </div>

        <div 
        className='relative w-full h-1 rounded-full bg-neutral-200 overflow-hidden mt-auto'>
            <span className='inline-block absolute left-0 top-0 bg-blue-500 rounded-full h-full w-[50%]'/>
        </div>

    </div>
  )
}

export default SpecialProduct