import React from 'react'
import ProjectItem from './ProjectItem'

interface IProps {
    title: string,
}
function SectionCreative({ title }: IProps) {
    return (
        <div className="container py-[64px]">
            <div
                className="
        xl:mb-[2.8rem]
        text-center text-[3rem]
        font-normal font-display
        leading-[76px]
        text-[#313131]
      "
            >
                {title}
            </div>
            <div className="space-y-[6rem]">
                <div className="flex xl:space-x-[5rem]">
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                </div>
                <div className="flex xl:space-x-[5.6rem] items-center justify-center">
                    <ProjectItem />
                    <ProjectItem />
                </div>
            </div>
        </div>
    )
}

export default SectionCreative