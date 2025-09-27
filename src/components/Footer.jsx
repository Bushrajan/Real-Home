// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
import { motion } from 'framer-motion';
import { VscTriangleRight } from 'react-icons/vsc';
import { PhoneIcon } from 'lucide-react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000, once: true });
  // }, []);

  // const headingVariant = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: { opacity: 1, y: 0 },
  // };



  motion
  return (
    <div className="w-full overflow-x-hidden bg-fixed bg-[#0054A5] bg-center flex justify-center py-15 lg:gap-20 gap-10  ">

      <footer className="relative text-white lg:pt-10  pb-6 px-6">
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
  );
}

export default Footer;