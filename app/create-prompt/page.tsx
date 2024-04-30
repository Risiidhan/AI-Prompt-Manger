"use client"

import { useState } from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
import Form from '@components/Form'
import User from '@models/user';

interface IPost {
    prompt: string,
    tag: string
}
const CreatePrompt = () => {
    const {data :session} = useSession();
    const router = useRouter();

    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState<IPost>({ prompt: '', tag: '' });
    const createPrompt = async (e: any) => {
        e.preventDefault();
        try {
            const userId = (session?.user as { id: string })?.id;

            const res = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: userId,
                    tag: post.tag
                })
            })

            if(res.ok)
                router.push('/');

        } catch (error) {
            console.log(error);
        }
        finally{
            setSubmitting(false);
        }
    }
    return (
        <>
            <Form
                type="Create"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={createPrompt}
            />
        </>
    )
}

export default CreatePrompt
