import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'

export default function Authenticated({ children }: any) {
    return (
        <React.Fragment>
            <Sidebar />
            <main className="ml-[var(--sidebar-width)] md:flex-1 bg-gray-400  text-black ">
                <div className='relative'>
                    <section className="container py-8 ">
                        {children}
                    </section>
                </div>
            </main>
        </React.Fragment>
    )
}

