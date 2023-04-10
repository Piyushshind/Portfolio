import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectThree ,Restaurent ,Tweeter,Ecom ,GDoc } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Gym Website"
          des=" The website will serve as a platform to promote the
          gym's services, showcase its facilities and
          equipment, provide information about trainers and
          fitness classes, and allow users to sign up and
          Carousel to showcase the activities."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Created grocery store website by using Micro
          frontend architecture (MFE), a design approach
          that breaks a web application into smaller, more
          manageable components that can be developed
          and deployed independently.
          "
          src={Ecom}
        />
        <ProjectsCard
          title="Tweeter Clone"
          des=" •Implemented proper authorization and
          authentication features to ensure data privacy and
          security, providing an enhanced user experience
          and also Utilized local storage to store data.
          "
          src={Tweeter}
        />
        <ProjectsCard
          title="Sign-Up and Sing-In Form"
          des=" User can register and in form and after then going through all validations of input fields the 
              data will stored to local storege and then in sign-in form it cheacks the local data and compaires 
                 the user data and the proceedes for next step . 
          "
          src={projectThree}
        />
        <ProjectsCard
          title="Restaurent Web"
          des="•Created Restaurent menu book and Pricing details with interior look of Restaurent and in that user can register himself "
          src={Restaurent}
        />

        <ProjectsCard
          title="Google Doc Clone"
          des="•Created a Google Docs Website clone with React
          JS, HTML5, JS, CSS3, capturing key features and
          delivering seamless user experience akin to the
          official site.
          "
          src={GDoc}
        />
        
      </div>
    </section>
  );
}

export default Projects