import React from 'react'
import man from "../assets/accounts-man.png"

const Hero = () => {
  return (
    <section id="home" className="bg-green-500 py-4">
    <div className="max-w-[1150px] mx-auto">
      <div className="flex flex-wrap items-center pt-10"> {/*"flex flex-wrap items-center pt-10*/}
        
        <div className="w-full lg:w-1/2 px-4">
          <div className="wow fadeInLeft" data-wow-delay=".3s">
            <h1 className="text-4xl md:text-6xl font-bold text-white py-2 mb-4 ">Finance Management at Your Fingertips</h1>
            <p className="text-lg text-white leading-relaxed mb-6">
              Simplify and automate finance management to run your micro, small, medium, and enterprise businesses efficiently!
            </p>
            <form action="#" method="get" target="_blank" className="trial-form">
              <div className="button">
                <button type="submit" className="bg-green-800 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Go to Accounts
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className=" hidden lg:block w-full lg:w-1/2 px-4">
          <div className="flex items-center mx-auto " data-wow-delay=".4s">
            <img src={man} alt="Person managing finances" className="md:w-[600px] md:h-[500px]  mx-auto my-2 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Hero