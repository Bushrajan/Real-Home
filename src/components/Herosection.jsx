
import { motion } from 'framer-motion'
import { MdLocationOn } from 'react-icons/md'
import SubmitButton from '../components/SubmitButton'
import { useState, } from "react";
import { RealEstateHome } from '../components/RealEstateHome';
import Header from './Header';

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

const Herosection = () => {
    const [current, setCurrent] = useState(0)
    const slide = slides[current]

    const nextSlide = () => setCurrent((current + 1) % slides.length)
    const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length)

    motion

    return (
        <div className='lg:hidden'>
            <Header />

            <div    className=" h-[300px] bg-cover bg-center transition-all duration-700" style={{ backgroundImage: `url(${slide.image})` }} >

            </div>
            <div className=" relative w-full  inset-0 flex  items-center justify-center">
                <div className=" relative w-full flex lg:flex-row flex-col  bg-white   overflow-hidden lg:shadow-2xl transition-shadow duration-300">

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

                {/* Slider Controls */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                    <SubmitButton onClick={prevSlide} label="<" className="text-white px-4 py-2" />
                </div>

                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <SubmitButton onClick={nextSlide} label=">" className="text-white px-4 py-2" />
                </div>
            </div>

        </div>
    )
}

export default Herosection