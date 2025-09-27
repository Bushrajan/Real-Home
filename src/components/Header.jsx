
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenuFill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubmitButton from "./SubmitButton";
import { BsHeartFill } from 'react-icons/bs';


const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showFav, setShowFav] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSidebarDropdown, setOpenSidebarDropdown] = useState(null);

  useEffect(() => {
    if (!sidebarOpen) setOpenSidebarDropdown(null);
  }, [sidebarOpen]);


  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  })


  const navLinks = [

    {
      name: "Real Estate", path: "/ListLayout",
      subLinks: [
        { name: "List Layout", path: "/ListLayout" },
        { name: "List Layout Full Width", path: "/" },
        { name: "Grid Layout", path: "/" },
        { name: "Grid Layout Full Width", path: "/" },
        { name: "Half Map Layout", path: "/" },
        { name: "Agents", path: "/Agent" },
        { name: "Agencies", path: "/Agent" },
      ]
    },
    {
      name: "Property", path: "/",
      subLinks: [
        { name: "Default Layout", path: "/" },
        { name: "Thumbs Gallery", path: "/" },
        { name: "Full Width Layout", path: "/" },
        { name: "Horizontal TabsNew", path: "/" },
        { name: "Vertical TabsNew", path: "/" },
        { name: "Accordion LayoutNew", path: "/" },
        { name: "Toggle LayoutNew", path: "/" },
        { name: "Isolated Layout", path: "/" },
      ]
    },
    {
      name: "Gallery", path: "/",
      subLinks: [
        { name: "Gallery 2 Columns", path: "/" },
        { name: "Gallery 3 Columns", path: "/" },
        { name: "Gallery 4 Columns", path: "/" },
      ]
    },
    {
      name: "Pages", path: "/",
      subLinks: [
        { name: "Properties Widgets", path: "/" },
        { name: "Agents Widgets", path: "/" },
        { name: "Other Widgets", path: "/" },
        { name: "For Sale", path: "/" },
      ]
    },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  };
  motion
  return (
    <div className="relative z-[10] lg:pt-5 pt-3 w-full bg-gradient-to-b from-black/80 to-transparent lg:bg-[#ffffff00] bg-black text-white"  >

      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-[80%] h-full bg-white text-black shadow-lg z-50 p-5 overflow-y-auto"
          >
            <div className="flex justify-end">
              <button onClick={() => setSidebarOpen(false)}>
                <IoClose className="w-8 h-8 text-black" />
              </button>
            </div>

            <motion.ul
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              className="mt-6 space-y-4"
            >
              {navLinks.map((link) => {
                const hasDropdown = link.subLinks;
                const isOpen = openSidebarDropdown === link.name;

                return (
                  <motion.li key={link.name} variants={itemVariants}>
                    <div className="flex justify-between items-center">
                      <Link to={link.path} className="text-[16px] font-medium">
                        {link.name}
                      </Link>
                      {hasDropdown && (
                        <button onClick={() => setOpenSidebarDropdown(isOpen ? null : link.name)}>
                          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {hasDropdown && isOpen && (
                        <motion.ul
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="mt-2 pl-3 space-y-2"
                        >
                          {link.subLinks.map((sublink) => (
                            <motion.li key={sublink.name} variants={itemVariants}>
                              <Link to={sublink.path} className="text-[14px] text-gray-600 hover:text-[#0054A6]">
                                {sublink.name}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <div className="px-2 lg:px-0 max-w-7xl mx-auto text-white  flex justify-between items-center">

        <button className="flex  lg:hidden md:hidden sm:hidden gap-3 ms-2 me-2 relative"  >
          <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 510 510"><path d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm0 76.5c43.35 0 76.5 33.15 76.5 76.5s-33.15 76.5-76.5 76.5-76.5-33.15-76.5-76.5 33.15-76.5 76.5-76.5zm0 362.1c-63.75 0-119.85-33.149-153-81.6 0-51 102-79.05 153-79.05S408 306 408 357c-33.15 48.45-89.25 81.6-153 81.6z"></path></svg>
        </button>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <img src="https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2021/10/rh-logo-retina.png" alt="Meditics Logo" className="mx-auto   w-[110px]" />
        </motion.div>

        <div className='flex flex-wrap justify-end items-center'>
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-2 lg:text-[15px] font-medium">
            <Link
              to="/"
              className="bg-[#0054A6] transition px-5 py-3 rounded-[6px] "
            >Home
            </Link>

            {navLinks.map((link, i) => {
              const hasDropdown = link.subLinks;
              const isOpen = openDropdown === link.name;

              return (
                <motion.div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setOpenDropdown(link.name)}
                  onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={link.path || "#"}
                    className={`transition px-5 py-4   rounded-[6px] ${isOpen ? " bg-[#0054A6]" : ""
                      } hover:bg-[#0054A6]  px-5 py-3 text-white`}
                  >
                    {link.name}
                  </Link>

                  {hasDropdown && (
                    <AnimatePresence>
                      {isOpen && (
                        <motion.ul
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="absolute top-full left-0 mt-2 w-[240px] bg-white shadow-lg rounded border-t-4 border-[#0054A6] z-10 p-2"
                        >
                          {link.subLinks.map((sublink) => (
                            <motion.li
                              key={sublink.name}
                              variants={itemVariants}
                              className="px-5 py-3 lg:text-[15px] text-gray-500 hover:bg-[#dedede40] transition"
                            >
                              <Link to={sublink.path}>{sublink.name}</Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </motion.div>
              );
            })}

          </div>

          <div className='flex  justify-end items-center'>
            <button
              className="lg:flex md:flex sm:flex hidden gap-3 ms-3"
            >
              <svg version="1.1" fill='white' xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
              <span>1-800-555-1234</span>
            </button>

            <div className="relative">
              {/* Button with hover logic */}
              <button
                onMouseEnter={() => setShowFav(true)}
                onMouseLeave={() => setShowFav(false)}
                className="lg:flex md:flex sm:flex hidden  gap-3 ms-2 me-2 relative"
              >

                <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 510 510"><path d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm0 76.5c43.35 0 76.5 33.15 76.5 76.5s-33.15 76.5-76.5 76.5-76.5-33.15-76.5-76.5 33.15-76.5 76.5-76.5zm0 362.1c-63.75 0-119.85-33.149-153-81.6 0-51 102-79.05 153-79.05S408 306 408 357c-33.15 48.45-89.25 81.6-153 81.6z"></path></svg>

                {/* My Favorites Dropdown */}
                < AnimatePresence >
                  {showFav && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-[6px] absolute gap-3 bg-white text-black items-center justify-start ps-10 py-10 w-[250px] top-[55px] right-[15px] z-50"
                      onMouseEnter={() => setShowFav(true)}
                      onMouseLeave={() => setShowFav(false)}
                    >
                      <span
                        className="absolute w-5 h-5 bg-white top-[-15px] right-[0px]"
                        style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
                      ></span>

                      <div className="flex gap-3">
                        <span><BsHeartFill fill="gray" className="w-10 h-5" /></span>
                        <a
                          href="#!"
                          className="transition text-gray-500 text-[15px] hover:underline hover:text-[#0054A6] font-semibold"
                        >
                          My Favorites
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

            <SubmitButton
              label="Submit"
              onClick={() => console.log("Clicked!")}
              className="mx-auto"
            />


            <button onClick={() => setSidebarOpen(true)}><RiMenuFill className="lg:hidden   sm:block ms-2 text-[24px]" /></button>
          </div>
        </div>
      </div>
      <div className='lg:hidden md:hidden sm:hidden flex justify-between py-2 items-center bg-black px-2'>
        <button
          className="flex gap-3 ms-3 text-[12px]"
        >
          <svg version="1.1" fill='white' xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
          <span>1-800-555-1234</span>
        </button>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="group bg-[#1CB2FF] hover:bg-[#0054A6] text-[12px]  text-white px-3 py-2 rounded-[6px]  transition-colors duration-300"
        >
          Submit
        </motion.button>

      </div>


    </div >
  );
};

export default Header;
