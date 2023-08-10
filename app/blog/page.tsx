import {Metadata} from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog",
};
async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/postsds", {
        next: {
            revalidate: 60
        }
    });

    if (!response.ok) throw new Error("Ошибка!")

    return response.json();
}

export default async function Blog() {
    const posts = await getData();
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}