'use client'
import { useState, useEffect } from 'react'
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }: any) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data?.map((prompt: any) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}
const Feed = () => {
  const [allPrompts, setAllPrompts] = useState([]);
  const [searchText, setSearchtext] = useState('');
  const handleSearchChange = (e: Event) => { }
  const handleTagClick = () => { }

  const fetchPrompts = async() =>{
    const res = await fetch('api/prompt');
    const data = await res.json();
    console.log(data);
    setAllPrompts(data);
  }

  useEffect(()=>{
    fetchPrompts();
  },[])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={() => handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList data={allPrompts} handleTagClick={handleTagClick} />
    </section>
  )
}

export default Feed