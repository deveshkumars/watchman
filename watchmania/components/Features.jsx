import { BoltIcon, ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, CameraIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'BUY WATCHES',
        description: 'Professionally licensed drone photography services',
        icon: BoltIcon,
    },
    {
        name: 'SELL WATCHES',
        description: 'Have a timepiece to sell? This is the place',
        icon: BoltIcon,
    },
    {
        name: 'BROWSE LISTINGS',
        description: 'Replace doomscrolling with looking at listings for watches',
        icon: BoltIcon,
    },
    {
        name: 'INVEST IN WATHCES',
        description: 'Build a portfolio of some of the finest wristpieces out there.',
        icon: BoltIcon,
    },
]

const Features = () => {
    return (
        <section className='pb-12 xl:py-24'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-2 xl:mb-3 text-center mx-auto'>Key Features</h2>

            <div className = 'flex flex-col'>
                <div className='mx-auto max-w-7xl text-center'>
                    <p className='mt-2 text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl' >The best place to buy and sell watches.</p>
                    <p className='mt-6 text-lg leading-8 text-black dark:text-white'>It's a wide array of useful features..</p>
                </div>
                
            </div>

            <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
               <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
                {
                    features.map((feature) => (
                        <div key={feature.name}
                        className='relative hover:scale-110 transition-all'>
                            <dt className='text-base font-semibold leading-7 text-muted-foreground justify-center'>
                                <div className='flex flex-col w-[100px] h-[100px] bg-primary rounded-full items-center mb-4 justify-center'>
                                    <feature.icon
                                    className='h-[36px] w-[36px] text-white' aria-hidden="true"
                                    />
                                </div>
                                <div className='text-black dark:text-white'>
                                    {feature.name}
                                </div>
                            </dt>

                            <dd className='mt-2 text-base leading-7'>
                                {feature.description}
                            </dd>
                        </div>
                    ))
                }
                </dl> 
            </div>

        </div>
        </section>
    )
}

export default Features