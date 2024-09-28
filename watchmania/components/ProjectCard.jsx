import React from 'react'
import { Card, CardHeader } from './ui/card';
import Image from 'next/image';
import Badge from './Badge';
import Link from 'next/link';
import { Link2Icon } from '@radix-ui/react-icons';


const ProjectCard = ({project}) => {
  return (
    <Card className='group overflow-hidden relative'>
        <CardHeader className='p-0'>
            <div className='relative w-full h-[290px] flex items-center justify-center dark:bg-secondary/40xl:bg-[100%] xl:bg-no-repeat overflow-hidden'>
                {/* <!-- <Image
                src={project.image}
                width={440}
                height={200}
                alt=''
                priority
                className='absolute top-0 shadow-2xl hover:scale-110 transition-all'
                /> */}
                
            

            <div className='flex gap-x-4'>
                <Link
                href={project.link}
                className='bg-secondary w-[55px] h-[55px] flex justify-center items-center rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50 duration-200 transition-all'>
                <Link2Icon/>
                </Link>
            </div>

            </div>
        </CardHeader>
            <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'
            icon={<Link2Icon />}
            endCountNum={project.price}
            endCountText="K USD"
            badgeText=''>Hi</Badge>
            <h4 className="h4 mb-1">{project.make}</h4>
            <p className="text-muted-foreground text-lg">{project.model}</p>
    </Card>
  )
}

export default ProjectCard