import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const About = () => {
  const openResumeLink = () => {
    window.open('https://drive.google.com/file/d/1AY8Y_TxP02PSc7bfLRTAtlqr-f1NtAPN/view?usp=drive_link', '_blank');
  };

  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-2xl font-semibold mt-10'>
          I'm Trishita Nandy, student of JNU
        </p>
        <br/>
        <p className='text-xl text-gray-400'>I am a Full Stack Java developer. I am familier with Java Spring Boot. I am also familier with frontend technologies like HTML, CSS, JavaScript, ReactJs. I have done MCA from Jawaharlal Nehru University (2021-2023). I'm passionate about creating beautiful, functional, and user-friendly websites and applications, and trying my best to learn and grow as a developer. </p>
        <div className='mt-10 flex'>
          <Link to='projects' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
            Projects
            <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight size={20} className='ml-1'/></span>
          </Link>
          <button className='group text-white w-fit px-6 py-3 my-2 ml-14 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-gray-500 cursor-pointer' onClick={openResumeLink}>
            Resume <BsFillPersonLinesFill size={30} className='ml-3'/>
        
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
