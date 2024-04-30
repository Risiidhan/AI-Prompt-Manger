import React from 'react'
import PromptCard from './PromptCard';

interface ProfileProps {
  name: string;
  desc: string;
  data: any[]; // Adjust the type according to the expected data type
  handleEdit: (prompt:string) => void;
  handleDelete: (prompt:string) => Promise<void>;
}

const UserProfile: React.FC<ProfileProps> = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className='w-full'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>

      <div className='mt-10 prompt_layout'>
        {data.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleEdit={() => handleEdit && handleEdit(prompt)}
            handleDelete={() => handleDelete && handleDelete(prompt)}
          />
        ))}
      </div>
    </section>
  )
}

export default UserProfile;