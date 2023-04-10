import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Chemistry"
            subTitle="Savitribai Phule Pune University (2019 - 2023)"
            result=""
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="LVH - Science "
            subTitle="LVh College (2017 - 2019)"
            result="58.80 %"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Shree Ram School (2015 - 2017)"
            result="81.40 %"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         
          <ResumeCard
            title="Web Developer & Trainee"
            subTitle="Trainee at FunctionUp - (2022 - 2023)"
            result="Bengaluru"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in FunctionUp isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="React Developer - (2022 - 2023)"
            result="Nashik"
            des="by using verious tech-stacks like js , recoil , MFE , MUI , Bootstrap , CSS3 created 4 big projects and many small projects"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education