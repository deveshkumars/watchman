'use client'

import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { Button } from "@/components/ui/button";
import {useState, useEffect} from "react"; 
import { RiMenFill, RiBookmark3Fill } from "react-icons/ri"
import NewWatch from '@/components/NewWatch';

  

var projectData = []

var uniqueCategories = [
  'all watches',
  ...new Set(projectData.map((item) => item.make))
];


const marketplace = () => {

  const [watches, setWatches] = useState([])
    // A function to get all of the students from the frontend. MAKE SURE your backend is running on port 8080!
  async function getAllWatches() {
      // fetch the URL 
      const res = await fetch("http://localhost:8080/watches", {
          method: "GET",
      })
      // We turn the result into a JSON. We could have also turned it into a string, for instance
      const resJSON = await res.json()
      setWatches(resJSON)
      projectData = watches;
      watches.map((item) => console.log(item.make))
      uniqueCategories = [
        'all watches',
        ...new Set(watches.map((item) => item.make))
      ];
  }

    useEffect(() => {
      getAllWatches()
    }, [])


  getAllWatches();




  const [makes, SetMakes] = useState(uniqueCategories);
  const [make, setMake] = useState('all watches');
  const filteredProjects = projectData.filter((project) => {
    return make === 'all watches'
    ? project
    : project.make === make
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title text-center mx-auto'>
          Watchmania Marketplace
        </h2>
        <p className='subtitle mb-8 text-center xl:mb-16'>Buy and sell your favorite wristpieces!</p>
        

        {/* Tabs */}
        <Tabs defaultValue={make} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none'>
            {
              makes.map((make, index) => {
                return (
                  <TabsTrigger
                  value={make}
                  key={index}
                  onClick={() => setMake(make)}
                  className='capitalize w-[162px] md:w-auto'
                  >
                    {make}
                  </TabsTrigger>
                )
              })
            }
          </TabsList>

          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
            filteredProjects.map((project, index) => {
              return (
                <TabsContent value={make} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })
            }
          </div>

          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <NewWatch/>
          </div>

        </Tabs>
      </div>
    </section>
  );
}

export default marketplace