import Header from '../components/Header'
import { motion } from 'framer-motion'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import SubmitButton from '../components/SubmitButton'
import { useState, } from "react";
import Herosection from '../components/Herosection';
import { RealEstateHome } from '../components/RealEstateHome';
import Agent from '../components/Agent';
import SwiperSlider from '../components/SwiperSlider';
import { VscTriangleRight } from 'react-icons/vsc';
import { PhoneIcon } from 'lucide-react';
import { FaLocationDot } from 'react-icons/fa6';

const slides = [
  {
    title: 'Villa on Hollywood Boulevard',
    description1: 'Spacious and fabulous home in prime',
    description2: 'location. This executive style four bed,',
    description3: 'four bath home',
    beds: 3,
    baths: 4,
    sqft: 4520,
    price: '$4,750',
    location1: 'Hatteras Lane, Hollywood, FL 33019, USA',
    image: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/spacejoy-RqO6kwm4tZY-unsplash-1.jpg',
  },
  {
    title: 'Villa on Grand Avenue',
    description1: 'Skyline views and modern interiors',
    description2: 'Spacious and fabulous home in prime',
    description3: 'four bath home',
    beds: 2,
    baths: 2,
    sqft: 4800,
    price: '$740,000',
    location1: 'CocoWalk, 3015 Grand Avenue, Miami, FL',
    location2: '33133, USA',
    image: 'https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/Bedroom-e1642947949616.jpg',
  },
]

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0)
  const slide = slides[current]

  const nextSlide = () => setCurrent((current + 1) % slides.length)
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length)

  const cardData1 = [
    {
      title: "Single Family",
      count: 4,
      image: "https://static.designboom.com/wp-content/dbsub/448274/2023-01-17/note-architects-builds-a-villa-to-enjoy-the-scenery-of-the-forest-1-63c5fec9a34e1.jpg",
    },
    {
      title: "Shop",
      count: 1,
      image: "https://thumbs.dreamstime.com/b/luxury-interior-design-living-room-pool-villas-airy-bright-space-high-raised-ceiling-wooden-dining-table-luxury-143401452.jpg",
    },

  ]
  
  const cardData2 = [
    {
      title: "Apartment",
      count: 2,
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },
    {
      title: "Villa",
      count: 4,
      image: "https://ik.imagekit.io/agrpv/111977_02.jpg?t=20250918",
    },

  ]

  const logos = [
    { img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/one.png" },
    { img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/two.png" },
    { img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/three.png" },
    { img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/four.png" },
    { img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/five.png" },
  ];


  motion
  return (
    <>

      {/* slider */}
      <div className="hidden  lg:block lg:h-screen  bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url(${slide.image})` }} >
        <Header />

        <div className="relative max-w-7xl mx-auto lg:px-3" >
          <div className=" relative w-full  inset-0   flex  items-center justify-center">
            <div className="lg:absolute lg:mt-2 md:mt-2 mt-50  relative lg:top-[140px] lg:right-[0px]   flex lg:flex-row flex-col  bg-white rounded-xl  overflow-hidden lg:shadow-2xl transition-shadow duration-300">


              <div className="lg:w-25 w-full flex lg:flex-col flex-wrap  mx-auto  items-center justify-between  text-gray-700 ">
                <div className="flex flex-col lg:border-b border-0 w-[80px] p-8 border-[#bab6b665] items-center justify-center group">
                  <svg
                    className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
                  </svg>
                  <span>{slide.beds}</span>

                </div>

                <div className="flex flex-col lg:border-b border-0 w-[80px] p-8 border-[#bab6b665] items-center justify-center group">
                  <svg
                    className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.69"
                    height="24"
                    viewBox="0 0 23.69 24"
                  >
                    <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
                  </svg>
                  <span>{slide.baths}</span>
                </div>

                <div className="flex flex-col lg:border-b border-0 w-[80px] p-8 border-[#bab6b665] items-center justify-center group">
                  <svg
                    className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g><circle cx="2" cy="2" r="2" /></g>
                    <g><circle cx="2" cy="22" r="2" /></g>
                    <g><circle cx="22" cy="2" r="2" /></g>
                    <rect x="1" y="1" width="2" height="22" />
                    <rect x="1" y="1" width="22" height="2" />
                    <path
                      opacity="0.5"
                      d="M23,20.277V1h-2v19.277C20.7,20.452,20.452,20.7,20.277,21H1v2h19.277c0.347,0.596,0.984,1,1.723,1
        c1.104,0,2-0.896,2-2C24,21.262,23.596,20.624,23,20.277z"
                    />
                  </svg>

                  <span>{slide.sqft}</span>
                  <span className="text-gray-400">sq ft</span>
                </div>
              </div>

              <div className='w-full lg:p-5 md:p-5 px-3 lg:border-s border-0 border-[#bab6b665] mx-auto'>
                <div className='flex justify-between gap-10  lg:mt-5 items-center  '>
                  <span className="lg:text-[16px] md:text-[16px] text-[12px] text-[#ADBDC6] underline flex gap-2 justify-center items-center"><MdLocationOn fill='#ADBDC6' className='w-8 h-8' />
                    {slide.location1} <br />  {slide.location2}
                  </span>

                  <svg viewBox="0 0 100 100" fill='#ADBDC6' className='w-25 h-25' width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                    <path d="m22.1 47.4-.2 1.8-9.3-1.1.7-6.1 1.6.2-.5 4.3 2.5.3.4-3.6 1.5.2-.4 3.6zm2.7-8.9c-1.2 2.5-3 3.1-6.1 1.6-3.1-1.4-4-3.2-2.8-5.7 1.2-2.6 3-3.1 6.2-1.6 3 1.4 3.8 3.1 2.7 5.7zm-3.6-4c-2.2-1-3.3-.8-3.9.6-.6 1.3-.1 2.3 2.1 3.3s3.2.8 3.9-.6c.6-1.4.1-2.3-2.1-3.3zm11.4-6.8-1.4 1.4-3.2-1.1c-.1.1-.3.3-.4.4l-1.2 1.2 2.2 2.2-1.3 1.3-6.7-6.5 2.5-2.6c1.9-2 3.2-2.4 5-.6 1.2 1.1 1.4 2.1.9 3.1zm-5.8-2.9c-1-1-1.7-.5-2.6.5l-1.1 1.1 2.2 2.2 1.1-1.1c1-1.1 1.4-1.8.4-2.7zm18-2.6-1.9.6-2.3-2.5c-.2.1-.4.1-.6.2l-1.6.5 1 2.9-1.7.6-3-8.9 3.4-1.2c2.6-.9 3.9-.6 4.7 1.7.5 1.6.3 2.5-.6 3.2zm-3.9-5.3c-.5-1.3-1.2-1.2-2.6-.8l-1.5.5 1 3 1.5-.5c1.4-.4 2-.8 1.6-2.2zm12.3 3.5v1.6h-6.3l-.2-9.3 6.3-.1v1.6l-4.4.1v2.2l3.8-.1v1.5l-3.8.1v2.5zm9.7 4.4-2-.7-1.5-8.1-2.3 6.8-1.6-.6 3.1-8.8 2 .7 1.5 8 2.2-6.7 1.6.6zm12.3-.3-2.1-1.7-4.8 6-1.4-1.2 4.8-5.9-2.2-1.7 1-1.3 5.7 4.6zm12 30h-1.6l.1-4.3-2.5-.1-.1 3.6h-1.5l.1-3.6-3.7-.2.1-1.8 9.3.3zm-1.7 7.8c-.9 2.7-2.7 3.3-6 2.2s-4.2-2.8-3.3-5.4 2.7-3.3 5.9-2.2c3.3 1.1 4.3 2.8 3.4 5.4zm-3.9-3.6c-2.3-.8-3.3-.5-3.8.9s.1 2.3 2.4 3.1 3.3.5 3.8-.9-.2-2.3-2.4-3.1zm-2.4 14.6c-1.7 2.2-2.9 2.6-4.9 1.1-1.3-1-1.6-1.9-1.2-3l-3.7-.8 1.2-1.6 3.3.9c.1-.2.2-.3.4-.5l1.1-1.3-2.4-2 1.2-1.4 7.3 5.8zm-2.6-4.3-1 1.2c-.9 1.1-1.2 1.8-.1 2.7s1.7.4 2.6-.7l1-1.2zm-11.3 15.1c-2.5 1.1-3.8 1-4.8-1.3-.7-1.5-.6-2.4.3-3.3l-2.9-2.4 1.8-.8 2.6 2.3c.2-.1.4-.2.6-.3l1.5-.7-1.4-2.8 1.7-.8 3.8 8.5zm-1.8-4.4c-1.3.6-1.9 1-1.3 2.3s1.3 1.1 2.6.5l1.4-.6-1.2-2.8zm-13 7.8-.2-1.6 4.4-.5-.2-2.2-3.7.4-.1-1.5 3.7-.4-.3-2.5-4.5.5-.2-1.6 6.3-.6 1 9.3zm-5.6-.3-2-.5-2.3-7.8-1.6 6.9-1.7-.4 2.2-9.1 2.1.5 2.2 7.9 1.6-7 1.7.4zm-13.8-6.9 2.3 1.5-.9 1.4-6.1-4 .9-1.4 2.3 1.5 4.2-6.4 1.5 1zm18.9-13.7c9.2 0 16.6-7.4 16.6-16.6s-7.4-16.6-16.6-16.6-16.6 7.4-16.6 16.6 7.4 16.6 16.6 16.6m0 .4c-9.4 0-17-7.6-17-17s7.6-17 17-17 17 7.6 17 17-7.6 17-17 17zm0 2.6c10.8 0 19.6-8.8 19.6-19.6s-8.8-19.6-19.6-19.6-19.6 8.8-19.6 19.6 8.8 19.6 19.6 19.6m0 .4c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm0 25.6c25.1 0 45.6-20.5 45.6-45.6s-20.5-45.6-45.6-45.6-45.6 20.5-45.6 45.6 20.5 45.6 45.6 45.6m0 .4c-25.4 0-46-20.6-46-46s20.6-46 46-46 46 20.6 46 46-20.6 46-46 46zm0 2.6c26.8 0 48.6-21.8 48.6-48.6s-21.8-48.6-48.6-48.6-48.6 21.8-48.6 48.6 21.8 48.6 48.6 48.6m0 .4c-27.1 0-49-21.9-49-49s21.9-49 49-49 49 21.9 49 49-21.9 49-49 49z"></path>
                  </svg>
                </div>

                <div>
                  <h3 className="lg:text-[25px] md:text-[25px] text-[18px] font-semibold  text-gray-800">{slide.title}</h3>
                  <p className="text-sm mt-1 text-[#ADBDC6]">{slide.description1}</p>
                  <p className="text-sm mt-1 text-[#bbb7b7]">{slide.description2}</p>
                  <p className="text-sm mt-1 text-[#ADBDC6]">{slide.description3}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="lg:text-[25px] md:text-[25px] text-[18px] font-bold text-[#0054A5]">{slide.price} Monthly</span>
                    <SubmitButton
                      label="Know More"
                      onClick={() => console.log("Clicked!")}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Slider Controls */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <button onClick={prevSlide} className="lg:flex md:flex sm:flex hidden group bg-[#1CB2FF] hover:bg-[#0054A6] text-white px-5 py-3 rounded-[6px] transition-colors duration-300 mx-auto text-white px-4 py-2 " >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 320 512">
              <path fill="white" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256l137.3-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <button onClick={nextSlide} className="lg:flex md:flex sm:flex hidden group bg-[#1CB2FF] hover:bg-[#0054A6] text-white px-5 py-3 rounded-[6px] transition-colors duration-300 mx-auto text-white px-4 py-2 " >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 320 512">
              <path fill="white" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256L73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </button>
        </div>
      </div>


      {/* herosection */}
      <div>
        <div className="max-w-7xl mt-0 mx-auto">
          <Herosection />
        </div>


        <div className="max-w-7xl mt-15 mx-auto">
          <RealEstateHome />
        </div>
      </div >

      {/* manage your commapany */}
      <div className="w-full overflow-x-hidden bg-fixed bg-center flex justify-center lg:gap-20 gap-10 lg:py-45 py-15 companydiv bg-cover px-1">
        <section className="max-w-7xl mx-auto  p-6 rounded-lg shadow-lg mt-10">
          <div className="b flex lg:flex-row flex-col justify-center gap-20 " >

            <form className=" lg:w-[600px] w-full rounded-lg bg-white p-3">
              <div className="relative w-full mb-2">
                <select className="w-full border p-2 py-3 mb-2 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-400 appearance-none"
                  onFocus={() => setIsOpen(true)}
                  onBlur={() => setIsOpen(false)}
                >
                  <option>Mr</option><option>Ms</option>
                  <option>Mr</option><option>Ms</option>
                  <option>Mr</option><option>Ms</option>
                </select>

                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <input type="text" placeholder="Full Name" className="w-full border p-2 py-3 mb-2 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-600 appearance-none" />
              <input type="text" placeholder="Mobile" className="w-full border p-2 py-3 mb-2 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-600 appearance-none" />
              <input type="email" placeholder="Email" className="w-full border p-2 py-3 mb-2 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-600 appearance-none" />
              <div>
                <hr className='w-75 mx-auto text-gray-200 ' />
              </div>

              <div className='flex lg:flex-row flex-col  gap-3 '>
                <input type="text" placeholder="Country" className="w-full border p-2 py-3 mb-2 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-600 appearance-none" />
                <input type="text" placeholder="City" className="w-full border p-2 py-3 mb-2 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-600 appearance-none" />

              </div>
              <input type="text" placeholder="State" className="w-full border p-2 py-3 mb-2 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-600 appearance-none" />
              <input type="text" placeholder="Address" className="w-full border p-2 py-3 mb-2 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-600 appearance-none" />

              <select className="w-full border p-2 py-3 mb-2 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-400 appearance-none"
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
              > <option>Word of Mouth</option>
                <option>Social Media</option>
                <option>Google Search</option>
              </select>

              <select className="w-full border p-2 py-3 mb-2 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-400 appearance-none"
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
              > <option>None</option>
                <option>Social Media</option>
                <option>Google Search</option>
              </select>

              <textarea placeholder="Message" className="w-full border p-2 py-3 mb-2 h-36 focus:outline-none focus:ring-0 focus:border-gray-200 border-gray-200 rounded-[6px] text-gray-400 appearance-none"
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
              ></textarea>

              <button className=" hover:bg-[#0054A5] w-full text-white px-6 py-2 rounded bg-[#1CB2FF] transition">Submit</button>
            </form>

            <div className="flex flex-col justify-center px-3 text-white">
              <h2 className="lg:text-3xl font-bold mb-4">Manage All Your Company's Relationships</h2>
              <p className="mb-4">Through integrated CRM, new contact will be auto-generated on inquiry form's submission.</p>
              <p className="mb-4">History of communication can also be maintained on enquiry level.</p>
              <div className="mt-6 text-sm text-white italic mb-10">Your CRM, your control — all in one place.</div>
            </div>
          </div>
        </section >
      </div >


      {/* property type */}
      <div className="max-w-7xl overflow-x-hidden mx-auto lg:mb-20 px-4 py-10 flex lg:flex-row  flex-wrap justify-center items-center gap-5">
        {cardData1.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="relative lg:h-[550px] h-[300px] w-[230px] rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
          >
            <div
              className="lg:h-[550px] h-[300px] w-[230px] bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <motion.div
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.5 }}
                className="absolute lg:h-[550px] h-[300px] w-[230px] inset-0 bg-[#919191a2]"
              />
              <div className="absolute top-0 left-0 right-0 p-6 z-10 text-white">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-sm">{card.count} Properties</p>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="relative lg:h-[550px] h-[300px] w-[230px] rounded-lg overflow-hidden   transition-all duration-300"
        >
          <div
            className="lg:h-[550px] h-[300px] w-[230px] bg-cover bg-center"
          >
            <motion.div
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.5 }}
              className="absolute lg:h-[550px] h-[300px] w-[250px] inset-0 "
            />
            <div className="text-center lg:pt-35 pt-13 p-4 z-10 ">
              <h2 className="text-[18px] font-bold  mb-4">
                Configure and customize stuff around your website without going into code.
              </h2>
              <div>
                <hr className='w-25 mx-auto mb-2 text-[#1CB2FF]' />
              </div>
              <p className="text-gray-500">
                Real Homes theme gracefully facilitates real estate business owners by making property management easier & affordable.
              </p>
            </div>
          </div>
        </motion.div>

        {cardData2.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="relative lg:h-[550px] h-[300px] w-[230px]  rounded-lg overflow-hidden shadow-lg cursor-pointer transition-all duration-300"
          >
            <div
              className="lg:h-[550px] h-[300px] w-[250px] bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <motion.div
                initial={{ opacity: 0.6 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.5 }}
                className="absolute lg:h-[550px] h-[300px] w-[230px] inset-0 bg-[#919191a2]"
              />
              <div className="absolute top-0 left-0 right-0 p-6 z-10 text-white">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-sm">{card.count} Properties</p>
              </div>
            </div>
          </motion.div>
        ))}

      </div >


      <div className=' bg-[#F7F7F7]' style={{ clipPath: 'polygon(0 10%, 100% 0%, 100% 100%, 0% 100%)' }}>
        {/* buy or sell */}
        <div className="w-full overflow-x-hidden bg-fixed bg-center flex justify-center lg:gap-20 gap-10 lg:py-35 py-10 companydiv2 bg-cover px-1">
          <section className="max-w-7xl mx-auto  p-6  lg:mt-10">
            <div className="b flex lg:flex-row flex-col justify-center gap-20 " >
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center text-white px-6"
              >
                <p className="text-lg mb-4 max-w-xl mx-auto">
                  Buy or Sell
                </p>
                <h1 className="lg:text-4xl text-[25px] mb-8">
                  Looking to Buy a new property or Sell an existing one? RealHomes provides an easy solution!
                </h1>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white  mb-5 text-[#0054A5] font-semibold px-6 py-2 rounded hover:bg-gray-100 transition">
                    Submit Property
                  </button>
                  <button className="bg-[#1CB2FF] mb-5  text-white font-semibold px-6 py-2 rounded hover:bg-[#0099dd] transition">
                    Browse Properties
                  </button>
                </div>
              </motion.div>

            </div>
          </section >
        </div>

        {/* agent */}
        <div className="w-full overflow-x-hidden bg-fixed bg-center flex justify-center lg:gap-20 gap-10 lg:py-15 py-10 companydiv3 bg-cover px-1">
          <Agent />
        </div >
      </div>

      {/* swiper */}
      <div className="bg-[white]  w-full overflow-x-hidden bg-fixed bg-center flex justify-center lg:gap-20 gap-10 lg:py-35 py-10 companydiv4 bg-cover px-1" >
        <SwiperSlider />
      </div >

      {/* partners and footer */}
      <div className='companydiv3-half2'>
        <div className="w-full overflow-x-hidden bg-fixed bg-center lg:gap-20 gap-10 lg:pb-15 pb-10  companydiv3-half bg-cover px-1">
          {/* Header */}
          <div className="text-center mt-15">
            <h1 className="text-sm font-bold text-[#1CB2FF] uppercase tracking-wide">Our</h1>
            <h2 className="text-3xl font-bold text-gray-800">Partners</h2>
            <p className="text-gray-500">We honoured to have these amazing partners.</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10 py-10">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="w-[170px] h-[120px] "

              >
                <img src={logo.img} alt="logos" className='w-[170px] h-[80px]' />
              </div>
            ))}
          </div>
        </div >


        {/* footer */}
        <div className="w-full overflow-x-hidden bg-fixed bg-[#0054A5] bg-center flex justify-center py-15 lg:gap-20 gap-10  companydiv5 bg-cover px-1 ">

          <footer className="relative text-white lg:pt-40  pb-6 px-6">
            {/* top Line */}
            <div className="flex lg:justify-start gap-5 mb-10 justify-center items-center  pt-4 text-center text-sm text-white/60">
              <span>
                <img src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/11/rh-footer-logo.png" alt="logo" />
              </span>
              /
              <span>
                Simply #1 Real Estate Theme
              </span>
            </div>
            {/* <div className="max-w-7xl mx-auto flex lg:flex-row flex-col lg:justify-between justify-center items-center  gap-10"> */}
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-3 justify-center items-center  gap-10">
              {/* Quick Links */}
              <div className='lg:mx-0 mx-auto'>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="flex lg:flex-row flex-wrap lg:gap-15 gap-5 space-y-2 text-sm text-white/80">

                  <div>
                    <li className='flex gap-3 lg:mb-4 mb-1 hover:text-white'><VscTriangleRight />Home</li>
                    <li className='flex gap-3 lg:mb-4 mb-1 hover:text-white'><VscTriangleRight />Half Map Layout</li>
                    <li className='flex gap-3 lg:mb-4 mb-1 hover:text-white'><VscTriangleRight />Blog</li>
                  </div>
                  <div>
                    <li className='flex gap-3 lg:mb-4 mb-1 hover:text-white'><VscTriangleRight />List Layout</li>
                    <li className='flex gap-3 lg:mb-4 mb-1 hover:text-white'><VscTriangleRight />Grid Layout</li>
                    <li className='flex gap-3 lg:mb-4 mb-1 hover:text-white'><VscTriangleRight />Contact</li>
                  </div>
                </ul>
              </div>

              {/* Contact Info */}
              <div className='mx-auto '>
                <ul className="space-y-2  text-sm text-white/80">
                  <li className='flex lg:justify-start justify-center gap-3 lg:mb-5 mb-1 lg:pe-25'><FaLocationDot className='w-5 h-5' /> 3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345</li>
                  <li className='flex lg:justify-start justify-center gap-3 lg:mb-5 mb-1 lg:pe-25 hover:text-white'><PhoneIcon className='w-5 h-5' /> Phone: 23-456-7890</li>
                  <li className='flex lg:justify-start justify-center gap-3 lg:mb-5 mb-1 lg:pe-25 hover:text-white'><MdEmail className='w-5 h-5' /> Email: robot@inspirythemes.com</li>
                </ul>
              </div>

              {/* Tags */}
              <div className='mx-auto'>
                <h3 className="text-lg font-semibold mb-4 lg:text-left text-center">Tags</h3>
                <div className="flex flex-wrap lg:justify-start justify-center items-center gap-2">
                  {[
                    "awareness",
                    "contemporary",
                    "economy living",
                    "image post",
                    "interior",
                    "living rooms",
                    "studio",
                    "trendy",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#1CB2FF] text-white text-sm px-3 py-2 rounded-[6px] hover:bg-[#0054A5] transition cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="flex lg:justify-between justify-center items-center  pt-4 text-center text-sm text-white/60">
              <span>
                © 2025. All rights reserved.
              </span>
              <span>
                Designed by <span className='hover:text-white'>Bushra Jan</span>
              </span>
            </div>
            <span className='absolute bottom-0 lg:right-[-50px] right-[50px]  border-2 px-1 py-3 rounded-[6px] bg-[#1CB2FF] hover:bg-[#0054A5] transition cursor-pointer'>
              <img src="/top.png" className='w-10 h-5 ' alt="top" />
            </span>
          </footer>

        </div >
      </div>

    </>
  )
}

export default Home


