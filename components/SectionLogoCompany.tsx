import Image from 'next/image'
import React from 'react'

function SectionLogoCompany() {
    return (
        <div className="container grid grid-cols-12 lg:pt-[92px] lg:pb-[104px]">
            <div className="col-span-full md:col-span-5">
                <div className="text-[64px] font-normal leading-[99%] text-[#313131]">
                    Our Partners & <br />
                    Clients
                </div>
            </div>
            <div className="col-span-full md:col-span-7">
                <div className="grid grid-cols-6 gap-[32px]">
                    <div className="col-span-1">
                        <Image src="/svg/logoCompany.svg" alt='logo' width="100%" height="100%" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionLogoCompany