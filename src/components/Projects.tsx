import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data=[
    { 
        id:0,
         title : "website",
         desc:" a website using basic HTML and CSS Only",
         img:"/website.png",
         tags: ["HTML", "CSS"]
    },
    {   
        id:1,
         title : "  Resume Builder",
         desc:"A Resume Builder by using Basic concept of HTML, CSS and Typescript",
         img:"/sresume.png",
         tags: ["HTML", "CSS", "Typescript"]
    },

    {
        id:2,
         title : "Dyanamic  Resume ",
         desc:"A Typescript based interactive Resume built with  HTML, CSS and Typescript",
         img:"/dyresume.png",
         tags: ["HTML", "CSS", "Typescript"]

    }
    
];

const Projects =()=> {
    return (
        <div id ="projects" className='container pt-32'>
            <Heading title='My Projects' />
            <div className=' grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
                {data.map((el)=>(<Card 
                key={el.id}
                title={el.title}
                desc={el.desc}
                img={el.img}
                tags={el.tags}

                />))}
            </div>
             </div>
    )
}

export default Projects