import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

function EventCards() {
  return (
    <div
    className={cn(
        "grid grid-cols-2 lg:grid-cols-4 m-4 gap-4",
    )}>
      {images.map((img,idx) => (
        <div
        className='w-full aspect-[243/182.25] relative overflow-hidden rounded-lg'
        key={idx}>
          <Image
          unoptimized
          alt=''
          src={img}
          fill
          />
        </div>
      ))}
    </div>
  )
}

export default EventCards

const images = [
  "https://dkstatics-public.digikala.com/digikala-adservice-banners/b9b006b6fe4277b07140519788c632e933d19f21_1684932458.jpg?x-oss-process=image/quality,q_95/format,webp",
  "https://dkstatics-public.digikala.com/digikala-adservice-banners/3f03bfd2649b2bd7978b2dd33b5e4b16a6ce91b9_1685177045.jpg?x-oss-process=image/quality,q_95/format,webp",
  "https://dkstatics-public.digikala.com/digikala-adservice-banners/e65d3093fd3c20a4519eda5c85cf82ba4386772d_1685175956.jpg?x-oss-process=image/quality,q_95/format,webp",
  "https://dkstatics-public.digikala.com/digikala-adservice-banners/9ee9d49fb91c875ca390d29d45decd25d7d1097b_1679745917.jpg?x-oss-process=image/quality,q_95/format,webp"
]