import { Section } from 'lucide-react';
import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
    {
        image: '/work/3.png',
        category: 'Portraits',
        name: 'February 11, 2024',
        description:
        "Lorem Ipsum",
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/4.png',
        category: 'Portraits',
        name: 'February 11, 2024',
        description:
        "Lorem Ipsum",
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/5.png',
        category: 'Portraits',
        name: 'February 11, 2024',
        description:
        "Lorem Ipsum",
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/6.png',
        category: 'Portraits',
        name: 'February 11, 2024',
        description:
        "Lorem Ipsum",
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/7.png',
        category: 'Portraits',
        name: 'February 11, 2024',
        description:
        "Lorem Ipsum",
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/8.png',
        category: 'Portraits',
        name: 'February 11, 2024',
        description:
        "Lorem Ipsum",
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/9.png',
        category: 'Portraits',
        name: 'February 11, 2024',
        description:
        "Lorem Ipsum",
        link: '/',
        codepen: '/',
    },
    {
        image: '/work/10.png',
        category: 'Portraits',
        name: 'February 11, 2024',
        description:
        "Lorem Ipsum",
        link: '/',
        codepen: '/',
    }
]

const Gallery = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Gallery</h2>
            <div>
                {
                    projectData.map((project) => {
                        return (
                            <ProjectCard project={project} />
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Gallery