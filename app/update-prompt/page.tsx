"use client"

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Form from '@components/Form'

interface IPost {
    prompt: string,
    tag: string
}
const UpdatePrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');

    useEffect(() => {
        const getPromptData = async () => {
            const res = await fetch(`api/prompt/${promptId}`);
            const data = await res.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag
            })
        }

        if (promptId)
            getPromptData();
    }, [promptId])

    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState<IPost>({ prompt: '', tag: '' });
    if(!promptId)
        return alert('Prompt ID not found');

    const updatePrompt = async (e: any) => {
        e.preventDefault();
        try {

            const res = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag
                })
            })

            if (res.ok)
                router.push('/');

        } catch (error) {
            console.log(error);
        }
        finally {
            setSubmitting(false);
        }
    }
    return (
        <>
            <Form
                type="Edit"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={updatePrompt}
            />
        </>
    )
}

export default UpdatePrompt
