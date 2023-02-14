import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from "next/router";

function Sidebar() {

    const router = useRouter();
    const currentRoute = router.pathname;

    const activeClass = (url: string) => currentRoute === url ? 'nav-link active' : 'nav-link';

    return (
        <nav className="sidebar w-[var(--sidebar-width)] ">
            <div className="flex items-center justify-center text-center px-3 py-5 text-[#4B5563]">
                <span className="text-white cursor-pointer font-bold text-[18px]" >
                    TN
                </span>
            </div>
            <div className="py-6 space-y-2">
                <Link href="/admin/dashboard">
                    <div className={activeClass("/admin/dashboard")}>
                        <Image src="/svg/bell.svg" width={10} height={10} alt="" />
                        <span>Dashboard</span>
                    </div>
                </Link>
                <div className="nav-header ">
                    <span>Content</span>
                </div>
                <Link href="/admin/projects">
                    <div className={activeClass("/admin/projects")}>
                        <Image src="/svg/bell.svg" width={10} height={10} alt="" />
                        <span>Projects</span>
                    </div>
                </Link>
                <Link href="/admin/skills">
                    <div className={activeClass("/admin/skills")}>
                        <Image src="/svg/bell.svg" width={10} height={10} alt="" />
                        <span>Skills</span>
                    </div>
                </Link>
                <Link href="/admin/posts">
                    <div className={activeClass("/admin/posts")}>
                        <Image src="/svg/bell.svg" width={10} height={10} alt="" />
                        <span>Blogs</span>
                    </div>
                </Link>
                <Link href="/admin/contacts">
                    <div className={activeClass("/admin/contacts")}>
                        <Image src="/svg/bell.svg" width={10} height={10} alt="" />
                        <span>Contacts</span>
                    </div>
                </Link>
                <div className="nav-header ">
                    <span>Settings</span>
                </div>
                <Link href="/admin/media">
                    <div className={activeClass("/admin/media")}>
                        <Image src="/svg/bell.svg" width={10} height={10} alt="" />
                        <span>Media</span>
                    </div>
                </Link>
            </div>
            <div className="py-6 space-y-4"></div>
            <div className="mt-auto">
                <div className="nav-link">
                    <Image src="/svg/icon-logout.svg" width={10} height={10} alt="" />
                    <span>Logout</span>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
