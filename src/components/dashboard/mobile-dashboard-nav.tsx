import React from 'react'
import { Icons } from '../icons'

function MobileDashboardNav() {
  return (
    <nav>

    </nav>
  )
}

export default MobileDashboardNav

const sections = [
    {
        title : "overview",
        href : "/dashboard",
        Icon : Icons.EyeLine,
    },
    {
        title : "orders",
        href : "/dashboard/orders",
        Icon : Icons.EyeLine,
    },
]