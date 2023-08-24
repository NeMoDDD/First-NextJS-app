import {Navigate} from "@/components/Navigation";


const navItems = [
    {label: "Home", href: "/"},
    {label: "Blog", href: "/blog"},
    {label: "About", href: "/about"},
]
export default function TheHeader() {
    return (
        <header className="header">
            <Navigate navLinks={navItems}/>
        </header>
    )
}