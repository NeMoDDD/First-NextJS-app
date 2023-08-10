'use client'

export default function ErrorWrapper({error}: {error: Error}) {
    return (
        <div>
            <p>Ooops.. {error.message}</p>
        </div>
    )
}