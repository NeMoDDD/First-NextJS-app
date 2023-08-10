import {Metadata} from "next";

type PropsType = {
    params: {
        id: string
    }
}

async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    });

    return response.json();
}

export async function generateMetadata({params: {id}}: PropsType): Promise<Metadata> {
    const post = await getData(id)
    return {
        title: post.title
    };
}

export default async function Post({params: {id}}: PropsType) {
    const post = await getData(id)
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );

}