import React from 'react'

const contact = () => {
  return (
    <section className='min-h-screen'>
      <div className='container mx-auto'>
        <div className='grid xl:grid-cols-1 pt-12'>
          <div className='flex flex-col justify center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Hello
            </div>
            <h1 className='h1 max-w-md mb-8'>Let's get this done</h1>
            <center>
            <p className='h3'>
              Thank you for using watchmania
            </p>
            <p className='h3'>
              Learn more about this site's epic creator by visiting <a className="text-blue-700" href="https://deveshkumar.vercel.app">Devesh's Personal Website</a>
            </p>
            </center>
          </div>
        </div>
      </div>

    </section>
  )
}

export default contact