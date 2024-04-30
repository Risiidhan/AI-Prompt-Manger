"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
// import Profile from '@components/Profile';
import UserProfile from '@components/UserProfile'

const Profile = () => {
    const router = useRouter();
    const [Prompts, setPrompts] = useState([]);
    const { data: session } = useSession();
    const userId = (session?.user as { id: string })?.id;

    const fetchPrompts = async () => {
        const res = await fetch(`api/user/${userId}/prompt`);
        const data = await res.json();
        setPrompts(data);
    }
    
    useEffect(() => {
        if (userId) 
            fetchPrompts();
    }, [userId]);
    
    const handleEdit = (prompt:any) => {
        router.push(`/update-prompt?id=${prompt._id}`)
     }
    const handleDelete = async (prompt:any) => { 
        const hasConfirmed = confirm("Do you want to delete this prompt?")

        if(hasConfirmed){
            try {
                await fetch(`/api/prompt/${prompt._id.toString()}`,
            {
                method : 'DELETE'
            })  
            
            const filteredPrompts = Prompts.filter((p:any)=>p._id !== prompt._id);
            setPrompts(filteredPrompts);
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <>
            <UserProfile
                name="My"
                desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
                data={Prompts}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        </>
    )
}

export default Profile