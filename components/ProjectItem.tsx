import React from 'react'

function ProjectItem() {
    return (
        <div className="group cursor-pointer space-y-[1.8rem]" >
            <div className="overflow-hidden" >
                <img
                    src="/images/project.png"
                    className="group-hover:scale-125 transition-all w-full h-full"
                />
            </div >
            <div className="p2 font-normal text-center" > KHANG - Dim Sum Bar</div >
        </div >
    )
}

export default ProjectItem