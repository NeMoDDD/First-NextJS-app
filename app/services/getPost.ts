export const getAllPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) throw new Error("Ошибка!")

    return response.json();
}

export const getPostsBySearch = async (search:string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)

    if (!response.ok) throw new Error("Ошибка!")

    return response.json();
}