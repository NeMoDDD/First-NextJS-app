"use client";
import {FormEventHandler, useState} from "react";
import {getPostsBySearch} from "@/app/services/getPost";
import useSWR from "swr";
const PostSearch = () => {
    const {mutate} = useSWR("posts");
    const [search, setSearch] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const posts = await getPostsBySearch(search);

        mutate(posts);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="search" value={search} onChange={event => setSearch(event.target.value)}/>
            <button type="submit">Search</button>
        </form>
    );
};

export {PostSearch};