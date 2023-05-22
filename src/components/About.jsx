import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-[100px]'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            My name is Facundo and I am a passionate web developer with experience in the PERN stack (PostgreSQL, Express, React, and Node.js). My work experience includes projects in the development of scalable and modern web applications. My formal education includes various courses and certifications in web development technologies, such as JavaScript, React, and Node.js.

Some of my most prominent projects include the creation of a scalable e-commerce platform for a book company. In addition to my technical skills, I also have a strong interest in developing soft skills such as communication, leadership, and teamwork. I believe these skills are fundamental for success in any project and teamwork.
            </p>
            <br />
            <p className='text-xl'>
            In my free time, I stay updated on the latest trends and technologies related to web development, and I also enjoy working on personal projects. My long-term goal is to continue developing my career in the field of web development and contribute to the growth and success of the companies I work for.

If you're interested in learning more about my experience and skills, please do not hesitate to contact me. I am eager to connect and collaborate on interesting projects.
            </p>
        </div>
    </div>
  )
}

export default About