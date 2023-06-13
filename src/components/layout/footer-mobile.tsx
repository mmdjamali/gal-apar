import React from 'react'
import { Icons } from '../icons'
import { cn } from '@/lib/utils'

function FooterMobile({
    className
} : { className ?: string }) {
  return (
    <footer 
    className={cn(
        "flex flex-col bg-lt-secondary-main gap-7 px-4 py-6",
        className
    )}>
        <div className='flex items-center justify-start gap-[10px]'>
            <Icons.LogoEn className='text-lt-primary-main h-[30px]'/>

            <p className='text-lt-accent-main center text-[14px]'>
                an open source marketplace project powered with Next js
            </p>
        </div>

        <p className="text-[14px] text-lt-accent-main/75">
            {"©All Rights of this project belongs to Ali Miri(UI & UX Designer) and Mohammad Jamali(Full-stack Developer)"}
        </p>
    </footer>
  )
}

export default FooterMobile