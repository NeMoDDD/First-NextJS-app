import Link from "next/link";
export default function AboutLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <h1>About us</h1>
            <div>
                <ul>
                    <li><Link href="/about/contact">Contacts</Link></li>
                    <li><Link href="/about/team">Team</Link></li>
                </ul>
            </div>
            {children}
        </div>
    );
}
