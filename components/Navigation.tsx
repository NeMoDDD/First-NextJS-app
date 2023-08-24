"use client";
import {usePathname} from "next/navigation";
import Link from "next/link";

type NavLink = {
    label: string
    href: string
}
type PropsType = {
    navLinks: NavLink[]
}
const Navigate = ({navLinks}:PropsType) => {
    const pathname = usePathname()
    return (
        <>
            {navLinks.map((navLink) => {
                const isActive = pathname === navLink.href
                return (
                    <Link href={navLink.href} key={navLink.href}  className={isActive ? "navlink active" : "navlink"}>
                        {navLink.label}
                    </Link>
                )
            })}
        </>
    );
};

export {Navigate};