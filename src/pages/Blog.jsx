
import { motion } from "framer-motion";
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaRegClock } from "react-icons/fa";
import { VscTriangleRight } from "react-icons/vsc";
// import { useState } from "react";
import { FaCamera, FaFire, FaHeart, FaStar, FaVideo } from 'react-icons/fa';
import { MdCompareArrows } from 'react-icons/md';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const blogPosts = [
    {
      title: "The Role of Physical Therapy in Recovery",
      format: "Image Post Format",
      text: "Ride the iconic Route 66, conquer the Himalayas, explore Australia's Great Ocean Road, cruise Italy's Amalfi Coast, and experience the thrill of Patagonia's open roads!",
      img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/blog-image-2-1-1240x720.jpg",
    },
    {
      title: "The Power of Volunteers in Patient Recovery",
      text: "When to Use Lorem Ipsum generally, lorem ipsum is best suited to keeping template fo looking bare or minimizing the distractions of the draft copy. Second, use lorem ipsum if you think placeholder text will distracting. in voluptate velit esse. Cursus libero viverra.",
      format: "Image Post Format",
      img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/blog-image-3-1.jpg",
    },
    {
      title: "The Power of Volunteers in Patient Recovery",
      format: "Image Post Format",
      text: "When to Use Lorem Ipsum generally, lorem ipsum is best suited to keeping template fo looking bare or minimizing the distractions of the draft copy. Second, use lorem ipsum if you think placeholder text will distracting. in voluptate velit",
      img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2017/06/rental-income-1240x720.jpg",
    },
    {
      title: "The Role of Physical Therapy in Recovery",
      text: "Ride the iconic Route 66, conquer the Himalayas, explore Australia's Great Ocean Road, cruise Italy's Amalfi Coast, and experience the thrill of Patagonia's open roads!",
      format: "Image Post Format",
      img: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/06/blog-image-1-2.jpg",
    },
    {
      title: "The Power of Volunteers in Patient Recovery",
      format: "Video Post Format",
      text: "When to Use Lorem Ipsum generally, lorem ipsum is best suited to keeping template fo looking bare or minimizing the distractions of the draft copy. Second, use lorem ipsum if you think placeholder text will distracting. in voluptate velit esse. Cursus libero viverra.",
      img: "https://meditics.temptics.com/assets/img/blog-wide-2.jpg",
    },
    {
      title: "Villa in Dubai",
      format: "Image Post Format",
      text: "Ride the iconic Route 66, conquer the Himalayas, explore Australia's Great Ocean Road, cruise Italy's Amalfi Coast, and experience the thrill of Patagonia's open roads!",
      img: "https://meditics.temptics.com/assets/img/blog-wide-3.jpg",
    },
  ];

  const categories = [
    { title: "Luxury" },
    { title: "Market Trends" },
  ];

  const properties1 = [
    {
      title: "Modern Villa Dubai",
      price: 950000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
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
        ),
      },
      sale: "Hot",
      camera: "5",
      video: "3",
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },
    {
      title: "Luxury Home in Clifton",
      price: 1250000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
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
        ),
      },
      sale: "Hot",
      camera: "6",
      video: "4",
      image: "https://www.homeportal.world/wp-content/uploads/2025/03/02-copia-scaled.jpg",
    },
    {
      title: "Elegant Bungalow in DHA",
      price: 780000,
      beds: {
        count: 4,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15  fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M1111.91,600.993h16.17a2.635,2.635,0,0,1,2.68,1.773l1.21,11.358a2.456,2.456,0,0,1-2.61,2.875h-18.73a2.46,2.46,0,0,1-2.61-2.875l1.21-11.358A2.635,2.635,0,0,1,1111.91,600.993Zm0.66-7.994h3.86c1.09,0,2.57.135,2.57,1l0.01,3.463c0.14,0.838-1.72,1.539-2.93,1.539h-4.17c-1.21,0-2.07-.7-1.92-1.539l0.37-3.139A2.146,2.146,0,0,1,1112.57,593Zm11,0h3.86a2.123,2.123,0,0,1,2.2,1.325l0.38,3.139c0.14,0.838-.72,1.539-1.93,1.539h-5.17c-1.21,0-2.07-.7-1.92-1.539L1121,594C1121,593.1,1122.48,593,1123.57,593Z" transform="translate(-1108 -593)" />
          </svg>
        ),
      },
      baths: {
        count: 2,
        icon: (
          <svg
            className="w-6 lg:h-6 md:h-6 h-15 fill-[#ADBDC6] group-hover:fill-[#1CB2FF] transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="23.69"
            height="24"
            viewBox="0 0 23.69 24"
          >
            <path d="M1204,601a8,8,0,0,1,16,0v16h-2V601a6,6,0,0,0-12,0v1h-2v-1Zm7,6a6,6,0,0,0-12,0h12Zm-6,2a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,609Zm0,5a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0v-1A1,1,0,0,1,1205,614Zm4.94-5.343a1,1,0,0,1,1.28.6l0.69,0.878a1,1,0,0,1-1.88.685l-0.69-.879A1,1,0,0,1,1209.94,608.657Zm2.05,4.638a1,1,0,0,1,1.28.6l0.35,0.94a1.008,1.008,0,0,1-.6,1.282,1,1,0,0,1-1.28-.6l-0.35-.939A1.008,1.008,0,0,1,1211.99,613.295Zm-11.93-4.638a1,1,0,0,1,.6,1.282l-0.69.879a1,1,0,1,1-1.87-.682l0.68-.88A1,1,0,0,1,1200.06,608.657Zm-2.05,4.639a1,1,0,0,1,.6,1.281l-0.34.941a1,1,0,0,1-1.88-.683l0.34-.94A1,1,0,0,1,1198.01,613.3Z" transform="translate(-1196.31 -593)" />
          </svg>

        ),
      },
      sqft: {
        count: 3600,
        icon: (
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
        ),
      },

      sale: "Hot",
      camera: "3",
      video: "2",
      image: "https://i.pinimg.com/originals/60/f6/e7/60f6e7b8d5a74d59b16f29ad5764d952.jpg",
    },
  ];

  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (index) => {
    setFavorites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // pagination
  const postsPerPage = 4;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const getPaginatedPosts = () => {
    const start = (currentPage - 1) * postsPerPage;
    return blogPosts.slice(start, start + postsPerPage);
  };

  const paginatedPosts = getPaginatedPosts();

  motion
  return (
    <div className="bg-[#F2F2F2]">
      <Header />

      {/* Hero Section */}
      <div>
        <div
          className="
    relative overflow-hidden lg:py-40 py-10 md:py-30 lg:px-0 md:px-10 px-5  
    bg-[url('https://i.pinimg.com/originals/ff/ca/a4/ffcaa4e0cc377cd2f5b81de2f950cf53.jpg')] 
    bg-cover bg-center 
    before:absolute before:inset-0 before:bg-[#1cb3ff83] before:bg-opacity-30
  "
        >

          <motion.h1
            initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className='heading-h1 lg:text-5xl relative z-10 text-center md:text-4xl text-4xl text-white'>
            Our Blogs
          </motion.h1>


        </div>
      </div>

      <div className="max-w-7xl  mx-auto grid lg:grid-cols-3 gap-8 lg:mt-16 md:mt-10 mt-5 lg:mb-15 md:mb-10 mb-5  lg:p-3">

        {/* Blog Posts*/}
        <div className="lg:col-span-2 space-y-8 px-2 " data-aos="fade-up" data-aos-duration="1050">
          {paginatedPosts.map((post, i) => (
            <div key={i} className="bg-white rounded-lg lg:border-0 md:border-0 sm:border-0 border-1 border-[#1CB2FF] hover:shadow-md overflow-hidden">
              <img src={post.img} alt={post.title} className="w-full object-cover" />
              <div className="p-6">

                <div>
                  {
                    post.format === "Image Post Format" ? (
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#1CB2FF] mb-3">
                        <VscTriangleRight className="w-5 h-5" />
                        {post.format}
                      </span>
                    ) : post.format === "Video Post Format" ? (
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#1CB2FF] mb-3">
                        <FaVideo className="w-5 h-5" />
                        {post.format}
                      </span>
                    ) : null
                  }
                </div>
                {/* Title + Excerpt */}
                <h2 className="lg:text-3xl md:text-2xl sm:text-xl font-bold text-[#041C33] hover:text-[#1CB2FF] transition">
                  {post.title}
                </h2>
                <p className="text-gray-500 mt-2 mb-4 lg:text-sm md:text-sm sm:text-sm text-[13px]" >
                  {post.text}
                </p>

                {/* Read More Button */}

                <motion.button
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group lg:w-[150px] md:w-[150px] sm:w-[150px] w-full flex items-center gap-3 text-sm  border border-[#1CB2FF] bg-[#1CB2FF] text-white hover:bg-[white] hover:text-[#1CB2FF] px-5 py-3 rounded font-semibold transition-colors duration-300"
                >

                  <Link to={`/detailblog/${i}`} className="flex  lg:w-25 md:w-50 w-full  btn justify-center items-center gap-2  ">
                    <small>READ MORE</small>

                  </Link>

                </motion.button>

              </div>
            </div>
          ))}

          <div className="flex justify-center items-center gap-2 mt-8">
            <button className="p-3 border border-gray-400 bg-white rounded-full transition"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            >
              <FaChevronLeft />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button className={`px-4 py-2 rounded  ${currentPage === i + 1
                ? "bg-[#1CB2FF] text-white  border border-gray-400 rounded-full"
                : " border border-gray-400 bg-white rounded-full text-[#041C33] hover:bg-[#1CB2FF] hover:text-white"
                } transition`}
                key={i}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button className="p-3 border border-gray-400 bg-white rounded-full transition"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-8 px-2">


          {properties1.map((prop, index) => (
            <div key={index} className="bg-white relative rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-full relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${prop.image})` }}>

                <div className="absolute top-[-10px] left-0 bg-[#0054A5] text-white text-xs font-semibold px-5 py-1 rounded-br-md z-10" style={{ clipPath: "polygon(0% 0%, 87% 0, 100% 49%, 87% 100%, 0% 100%)" }}>
                  Featured
                </div>


                <div className="absolute bottom-0 flex flex-row justify-between items-center px-5 w-full p-1 ">
                  <div className=" ">
                    <span className="bg-[#ff0000] text-white rounded text-sm font-semibold p-2">{prop.sale}</span>
                  </div>

                  <div className='flex gap-1 justify-center lg:pt-1 items-center'>
                    <span className="relative group cursor-pointer" onClick={() => toggleFavorite(index)}>
                      <FaHeart
                        className={`w-7 h-7 p-1 transition-colors duration-300 ${favorites.includes(index) ? "fill-[#ff0000]" : "fill-white"
                          }`}
                      />
                      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#ff0000] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        {favorites.includes(index) ? "Remove Favorite" : "Add to Favorites"}
                      </span>
                    </span>


                    <span className="relative group">
                      <MdCompareArrows className="  w-8 h-8 lg:p-0 p-1 lg:border-0 rounded-[6px] border border-gray-500 lg:fill-orange-500 fill-gray-500" />
                      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#ff0000] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        Compare Property
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-5 relative w-full">

                <div className='relative flex gap-2 justify-between  items-center'>
                  <div className='flex flex-col'>
                    <h3 className="lg:text-[23px] sm:text-lg text-[15px] font-semibold  mt-2 ">{prop.title}</h3>
                    <p className="text-[13px] w-full mt-2 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, earum recusandae qui iure.  </p>
                  </div>
                </div>

                <div className='flex  lg:mb-5 mt-3 flex-wrap lg:gap-12 gap-4 lg:justify-between justify-center mx-auto items-center'>

                  <div className=" flex flex-wrap lg:mx-0 mx-auto gap-10  items-center justify-between  text-gray-700">

                    <div className="flex flex-col items-center justify-center group">
                      <span className='text-[12px] font-bold'>
                        Bedrooms
                      </span>
                      <span className=' flex flex-row'>
                        {prop.beds.icon}
                        <span className='ms-2 text-[11px] font-bold'>{prop.beds.count}</span>

                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center group">
                      <span className='text-[12px] font-bold'>
                        Bathrooms
                      </span>
                      <span className=' flex flex-row'>
                        {prop.baths.icon}
                        <span className='ms-2 text-[11px] font-bold'>{prop.baths.count}</span>
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center group">
                      <span className='text-[12px] font-bold'>
                        Area
                      </span>
                      <span className=' flex flex-row'>
                        {prop.sqft.icon}

                        <span className='ms-2 text-[11px] font-bold flex gap-2'>{prop.sqft.count}
                          <span className="text-gray-400">sq ft</span></span>
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className='text-[12px] font-semibold'>For sale</span>
                    <p className="text-[#1CB2FF] lg:text-[25px] text-sm font-bold">${prop.price.toLocaleString()}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}

          {/* Search */}
          <div className="bg-[#F2F2F2] rounded  p-4" data-aos="fade-up" data-aos-duration="1">
            <div className="flex bg-white  lg:justify-between lg:items-start rounded  shadow-md">
              <input
                type="text"
                placeholder=""
                className="w-full px-1 py-3   rounded focus:outline-none focus:ring-0 focus:ring-[#1CB2FF]"
              />
              <button
                className="hover:bg-[#182E43] bg-[#1CB2FF] rounded-e text-white px-5 py-3 transition-colors duration-300"
              >
                Search
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="px-4 rounded-lg " data-aos="fade-up" data-aos-duration="1500">
            <h2 className="text-xl font-semibold mb-4 text-[#041C33]" >Categories</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {categories.map((cat, i) => (
                <li key={i} className="hover:text-[#1CB2FF] cursor-pointer flex justify-between">
                  <span className="heading flex gap-3"><VscTriangleRight /> {cat.title}</span>
                </li>
              ))}
            </ul>
          </div>




        </div>


      </div>

      <Footer />
    </div >
  );
};

export default Blog;




