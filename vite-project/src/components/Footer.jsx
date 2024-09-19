
import poster from "../assets/Footer.png"
import { facebook,instagram,twitter } from "../assets/icons";
import { Facebook,Instagram,Twitter,Linkedin,Youtube} from 'lucide-react';

 
 const Footer = () => {

    const footerLinks = [
        {
            title: "Programs",
            links: [
                { name: "Maldives", link: "/" },
                { name: "Madrid", link: "/" },
                { name: "Paris", link: "/" },
                { name: "Thailand", link: "/" },
                
            ],
        },
        {
            title: "Information",
            links: [
                { name: "About us", link: "/" },
                { name: "FAQs", link: "/" },
               
                { name: "Privacy policy", link: "/" },
                { name: "Payment policy", link: "/" },
            ],
        },
        {
          title: "Help & Policies",
          links: [
              { name: "About us", link: "/" },
              { name: "FAQs", link: "/" },
             
              { name: "Privacy policy", link: "/" },
              { name: "Payment policy", link: "/" },
          ],
      },
        {
            title: "Get in touch",
            links: [
                { name: "customer@beaches.com", link: "mailto:customer@beaches.com" },
                { name: "+92554862354", link: "tel:+92554862354" },
            ],
        },
    ];

    const socialMedia = [
        { src: facebook, alt: "facebook logo" },
        { src: twitter, alt: "twitter logo" },
        { src: instagram, alt: "instagram logo" },
    ];
    return (
     /*  <footer name="Contact Us" className=' text-white max-w-[1440px] bg-black/90 pt-12 py-2 px-8 md:px-16 '>
        <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
          <div className='flex flex-col items-start'>
            <a href='/' className="text-2xl font-bold">
              <img src={poster} className="w-[200px]"/>
            </a>
            <p className='mt-6 text-base leading-7 font-semibold font-montserrat text-white-400 sm:max-w-sm'>
            Making business operations easier through simplified SAAS solutions
            </p>
            <div className='flex items-center gap-5 mt-8'>
              {socialMedia.map((icon) => (
                <div
                  className='flex justify-center items-center w-12 h-12 bg-white rounded-full hover:scale-90 duration-300'
                  key={icon.alt}
                >
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
  
          <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className='font-montserrat text-2xl font-bold leading-normal  mb-6 text-white'>
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray  font-semibold'
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
  
        <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
          <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
            <img
              src={copyrightSign}
              alt='copyright sign'
              width={20}
              height={20}
              className='rounded-full m-0'
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
        </div>
      </footer>
      */
      <footer className="bg-[#1A1D2B]">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-10 pt-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Logo and description */}
            <div className="space-y-4">
              <div>
                <a href="/">
                  <div className="flex items-center space-x-2 text-2xl font-medium">
                    <img
                      src={poster}
                      alt="AI Logo"
                    
                      className="w-[200px]"
                    />
                    {/*<span className="text-white">AIOps</span>*/}
                  </div>
                </a>
              </div>
              <p className="max-w-md pr-16 text-md text-gray-200">
                Enhance productivity and efficiency with cutting-edge artificial intelligence solutions for your business operations.
              </p>
              <div className="flex space-x-4 text-white text-medium">
                {/* Social Media Links */}
                {/*<a href="" target="_blank" className="text-gray-200 hover:text-gray-200">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="" target="_blank" className="text-gray-200 hover:text-gray-200">
                  <span className="sr-only">Twitter</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
              </a>*/}
                <Facebook className=" bg-[#888] p-1 rounded-md hover:bg-white hover:text-coral-red" size={27}/>
                <Instagram className=" bg-[#888] p-1 rounded-md hover:bg-white hover:text-coral-red" size={27}/>
                <Twitter className=" bg-[#888] p-1 rounded-md hover:bg-white hover:text-coral-red" size={27}/>
                <Linkedin className=" bg-[#888] p-1 rounded-md hover:bg-white hover:text-coral-red" size={27}/>
                <Youtube className=" bg-[#888] p-1 rounded-md hover:bg-white hover:text-coral-red" size={27}/>
              </div>
            </div>

            {/* Links sections */}
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-md font-semibold leading-6 text-white">Programs</h3>
                  <ul className="mt-6 space-y-4">
                    <li>
                      <a href="/aiplatform" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                      Startup
                      </a>
                    </li>
                    <li>
                      <a href="/aialgorithms" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                      Essentials
                      </a>
                    </li>
                    <li>
                      <a href="/industryapplications" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                      Splash

                      </a>
                    </li>
                    <li>
                      <a href="/industryapplications" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                      All In One

                      </a>
                    </li>
                    <li>
                      <a href="/industryapplications" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                      Non-Profit

                      </a>
                    </li>
                    <li>
                      <a href="/industryapplications" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                      Non-Governmental Organization

                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-md font-semibold leading-6 text-white">Information</h3>
                  <ul className="mt-6 space-y-4">
                    <li>
                      <a href="/predictiveanalysis" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/customerexperience" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                      How it Works
                      </a>
                    </li>
                    <li>
                      <a href="/automation" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                      Blog
                      </a>
                    </li>
                    <li>
                      <a href="/automation" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                      Huge Savings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-md font-semibold leading-6 text-white">Resources</h3>
                  <ul className="mt-6 space-y-4">
                    <li>
                      <a href="/pricing" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                        Pricing
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/casestudies" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="/privacy" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-md font-semibold leading-6 text-white">Company</h3>
                  <ul className="mt-6 space-y-4">
                    <li>
                      <a href="/aboutus" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/careers" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                        Careers
                      </a>
                    </li>
                    <li>
                      <a href="/contactus" className="text-md leading-6 text-gray-300 hover:text-gray-50">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 sm:mt-20 lg:mt-24">
            <div className="text-md text-center text-white">
              Copyright © 2024 . Crafted with
              <span className="text-gray-50"></span> by Web enthusiasts at
              <a rel="noopener" href="/"> ORcollate</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
  };
  
  export default Footer;