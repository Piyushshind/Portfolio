import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-4xl font-bold">Project Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="FM Transmiter (Electronics) Project."
            subTitle="Second year College Project."
            result="Success"
            des="It was a FM transmiter kind of small walki-talki within a range of 100 meters . "
          />
          <ResumeCard
            title="E-commerce Web."
            subTitle="Micro
            Frontend Architecture Project."
            result="Success"
            des="Created grocery store website by using MFE, a design approach
            that breaks a web application into smaller, more
            manageable components that can be developed
            and deployed independently.
            "
          />
          <ResumeCard
            title="Weather App."
            subTitle="Live Weather Detector."
            result="Success"
            des="By using Weather API calling I fetch the Live data and arranged it in simple manner "
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Frontend Devloper"
            subTitle="Web Devloper."
            result="Success"
            des="I have Complete 4 months Experience at FunctionUp as a Frentend Devloper "
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
