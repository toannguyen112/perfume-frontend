import Image from 'next/image'
import React from 'react'
import SectionCreative from '../components/SectionCreative'
import SectionLogoCompany from '../components/SectionLogoCompany'

function Out_work() {
    return (
        <main>
            <div className="relative">
                <SectionCreative title="CREATIVE COPYWRITER" />

                <div
                    className="absolute top-[1/2] z-[-1] -translate-y-[1/2] left-0 max-w-[500px]">
                    <Image src="/svg/flowerOurWorkLeft.svg" alt='hinh anh' width={100} height={100} />
                </div>
                <SectionCreative title="CREATIVE COPYWRITER" />
            </div>
            <SectionLogoCompany />
        </main>
    )
}

export default Out_work