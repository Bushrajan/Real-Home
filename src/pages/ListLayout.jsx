import { motion } from "framer-motion";
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { VscTriangleRight } from "react-icons/vsc";
import { FaHeart } from 'react-icons/fa';
import { MdCompareArrows } from 'react-icons/md';
import { FaSearch, FaSearchPlus } from "react-icons/fa";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { Link } from "react-router-dom";

const ListLayout = () => {

  const [filters, setFilters] = useState({
    status: "Any",
    location: "All Locations",
    type: "All Types",
  });

  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdowns = [
    {
      label: "Property Status",
      name: "status",
      type: "custom",
      options: ["Any", "For Sale", "For Rent"],
    },
    {
      label: "Location",
      name: "location",
      type: "custom",
      options: ["All Locations", "Karachi", "Lahore", "Islamabad"],
    },
    {
      label: "Property Type",
      name: "type",
      type: "custom",
      options: [
        "All Types",
        { group: "Commercial", items: ["Office", "Shop"] },
        {
          group: "Residential",
          items: [
            "Apartment",
            "Apartment Building",
            "Condominium",
            "Single Family",
            "Villa",
          ],
        },
      ],
    },
  ];

  const handleSelect = (name, value) => {
    setFilters({ ...filters, [name]: value });
    setOpenDropdown(null);
  };

  const Posts = [
    {
      id: 1,
      title: "Home in Merrick Way",
      price: 540000,
      date: "2024-08-01",
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
      sale: "Trendy",
      camera: "5",
      video: "3",
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },
    {
      id: 2,
      title: "Villa in Coral Gables",
      price: 825000,
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
      sale: "Trendy",
      camera: "6",
      video: "4",
      image: "https://www.homeportal.world/wp-content/uploads/2025/03/02-copia-scaled.jpg",
    },
    {
      id: 3,
      title: "Villa on Hollywood Boulevard",
      price: 740000,
      date: "2024-06-28",
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
      sale: "Trendy",
      camera: "5",
      video: "3",
      image: "https://www.marbella-ev.com/wp-content/uploads/2021/03/Most-Luxury-Villla-in-Marbella.jpg",
    },
    {
      id: 4,
      title: "Traditional Food Restaurant",
      price: 2600,
      date: "2024-09-10",
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
      sale: "Trendy",
      camera: "6",
      video: "4",
      image: "https://www.homeportal.world/wp-content/uploads/2025/03/02-copia-scaled.jpg",
    },
    {
      id: 5,
      title: "Villa on Grand Avenue",
      price: 4750,
      date: "2024-08-20",
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

      sale: "Trendy",
      camera: "3",
      video: "2",
      image: "https://i.pinimg.com/originals/60/f6/e7/60f6e7b8d5a74d59b16f29ad5764d952.jpg",
    },
    {
      id: 6,
      title: "Luxury Penthouse in Downtown",
      price: 1200000,
      date: "2024-05-05",
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

      sale: "Trendy",
      camera: "3",
      video: "2",
      image: "https://i.pinimg.com/originals/60/f6/e7/60f6e7b8d5a74d59b16f29ad5764d952.jpg",
    },
  ];

  const categories = [
    {
      title: "Commercial",
      subcategories: ["Office", "Shop"],
    },
    {
      title: "Residential",
      subcategories: [
        "Apartment",
        "Apartment Building",
        "Condominium",
        "Single Family",
        "Villa",
      ],
    },
    {
      title: "Commercial",
      subcategories: ["Office", "Shop"],
    },
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
      sale: "Trendy",
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
      sale: "Trendy",
      camera: "6",
      video: "4",
      image: "https://www.homeportal.world/wp-content/uploads/2025/03/02-copia-scaled.jpg",
    },

  ];

  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (index) => {
    setFavorites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };


  const [currentPage, setCurrentPage] = useState(1);

  // pagination
  const postsPerPage = 4;
  const totalPages = Math.ceil(Posts.length / postsPerPage);

  const getPaginatedPosts = () => {
    const start = (currentPage - 1) * postsPerPage;
    return Posts.slice(start, start + postsPerPage);
  };

  const paginatedPosts = getPaginatedPosts();
  console.log(paginatedPosts);

  const getMapSrc = (location) => {
    const query = encodeURIComponent(location === "All Locations" ? "Pakistan" : location);
    return `https://maps.google.com/maps?q=${query}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  };

  motion
  return (
    <div className="bg-[#F7F7F7]">
      <Header />

      {/* Hero Section */}
      <div className="relative">
        <div className="relative overflow-hidden lg:py-40 py-10 md:py-30 lg:px-0 md:px-10 px-5
          bg-[url('https://images.contentful.com/pqmtoyw9z10u/29xXSzcjib7RRuX6CE3Und/74a871a7492153de3bb9826a62b0b666/real-estate-4955087_1920.jpg')] 
          bg-cover bg-center 
          before:absolute before:inset-0 before:bg-[#1cb3ff83] before:bg-opacity-30">
          <motion.h1
            initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }}
            className='heading-h1 lg:text-5xl relative z-5 text-center md:text-4xl text-4xl text-white'>
            List Layout
          </motion.h1>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[100%] max-w-6xl"
          data-aos="fade-up" data-aos-duration="1050">
          <div className="relative p-5">
            <div className="max-w-5xl lg:pb-0 pb-5 mx-auto lg:bg-[linear-gradient(90deg,_rgba(255,255,255,1)_81%,_rgba(28,178,255,1)_73%)] w-full h-full lg:shadow-md lg:bg-[#ffffff00] lg:pt-0 pt-10 bg-white rounded-lg lg:p-0 flex lg:flex-row flex-col  gap-4 items-center lg:justify-between justify-center">
              <div className="flex flex-wrap justify-center items-center ">
                {dropdowns.map((item, i) => (
                  <div key={i} className="flex flex-col p-2 relative  border-gray-300">
                    <span className="text-sm mb-1 lg:ps-5">{item.label}</span>

                    {item.type === "custom" ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === item.name ? null : item.name)
                          }
                          className="flex items-center  gap-2 lg:w-[220px] px-3 py-4 text-sm  rounded   justify-start"
                        >
                          {item.icon}
                          <span className="flex-1  text-left">{filters[item.name]}</span>
                          <span className="transition-transform duration-300">
                            {openDropdown === item.name ? (
                              <VscTriangleUp className="text-[#1CB2FF]" />
                            ) : (
                              <VscTriangleDown className="text-gray-500" />
                            )}
                          </span>
                        </button>

                        {openDropdown === item.name && (
                          <ul className="absolute top-full mt-1 left-0 w-full lg:w-[250px] sm:w-[180px] bg-white border border-gray-300 rounded shadow-lg z-10 animate-fadeIn">
                            {item.options.map((opt, j) =>
                              typeof opt === "string" ? (
                                <li
                                  key={j}
                                  onClick={() => handleSelect(item.name, opt)}
                                  className="px-4 py-2 text-sm hover:bg-[#1cb3ff7d] hover:text-white cursor-pointer transition"
                                >
                                  {opt}
                                </li>
                              ) : (
                                <li key={j} className="px-4 py-2 text-sm font-semibold text-[#1CB2FF]">
                                  {opt.group}
                                  <ul>
                                    {opt.items.map((sub, k) => (
                                      <li
                                        key={k}
                                        onClick={() => handleSelect(item.name, sub)}
                                        className="px-4 py-2 text-sm hover:bg-[#1cb3ff7d] hover:text-white cursor-pointer transition"
                                      >
                                        {sub}
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              )
                            )}

                          </ul>
                        )}
                      </>
                    ) : (
                      <div className="flex items-center gap-2 bg-white border border-gray-300 rounded px-3 py-4 lg:w-[250px] sm:w-[180px]">
                        {item.icon}
                        <select
                          name={item.name}
                          value={filters[item.name]}
                          onChange={(e) => handleSelect(item.name, e.target.value)}
                          className="text-left w-full bg-transparent outline-none text-sm"
                        >
                          {item.options.map((opt, j) =>
                            typeof opt === "string" ? (
                              <option key={j}>{opt} <VscTriangleDown className="text-[black]" /></option>
                            ) : (
                              <optgroup key={j} label={opt.group}>
                                {opt.items.map((sub, k) => (
                                  <option key={k}>{sub}</option>
                                ))}
                              </optgroup>
                            )
                          )}
                        </select>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Search Buttons */}
              <div className="relative flex  lg:flex-row flex-wrap justify-between gap-3 me-3 rounded">
                <button className="lg:py-8 p-3 flex gap-2 lg:bg-[#0000ff00] bg-[#0cacf0] hover:border-blue-300 hover:border text-[#1896D6] lg:px-5 text-[11px] hover:bg-[#0cacf0] transition w-full sm:w-auto">
                  <FaSearchPlus className="text-white ms-2 mr-2" />
                </button>
                <button className="lg:py-8 p-3 flex gap-2  lg:bg-[#0000ff00] bg-[#0cacf0] hover:border-blue-300 hover:border text-white lg:px-3 text-[11px] hover:bg-[#0cacf000] transition w-full sm:w-auto">
                  <FaSearch className="text-white mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full lg:h-[400px] h-[200px] lg:mt-0 mt-5">
          <iframe
            title="Location Map"
            src={getMapSrc(filters.location)}
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      <div className="max-w-7xl  mx-auto grid lg:grid-cols-3 gap-8 lg:mt-16 md:mt-10 mt-5 lg:mb-15 md:mb-10 mb-5  lg:p-3">

        {/* Blog Posts*/}
        <div className="lg:col-span-2 space-y-8 px-2 overflow-hidden" data-aos="fade-up" data-aos-duration="1050">
          {Posts.map((prop, index) => (
            <div key={index} className="flex lg:flex-row mb-15 flex-col bg-white relative rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">

              <div className="relative  lg:w-[400px] w-full h-60 bg-cover bg-center lg:rounded-s-[6px] overflow-hidden" >
                <div className="relative group lg:w-[400px] w-full h-60 bg-cover bg-center lg:rounded-s-[6px] " style={{ backgroundImage: `url(${prop.image})` }}>

                  {/* Overlay Shade (hidden by default, visible on hover) */}
                  <div className="absolute inset-0 bg-[#1CB2FF] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0"></div>

                  {/* View Property Button (hidden by default, visible on hover) */}
                  <div className="absolute top-[100px] left-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <Link
                      to={`/ListLayout/${prop.id}`}
                      className="transition-colors duration-300 border-2 border-white hover:border-[#1CB2FF] hover:bg-[#1CB2FF] hover:text-white text-white text-xs font-semibold px-5 py-3 rounded"
                    >
                      View Property
                    </Link>
                  </div>
                </div>

                <div className="absolute top-[10px] left-0 bg-[#0054A5] text-white text-xs font-semibold px-5 py-1 rounded-r z-5"  >
                  Featured
                </div>


                {/* lover svg */}
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
                      <MdCompareArrows className="  w-8 h-8 lg:p-0 p-1 lg:border-0 rounded-[6px] border border-gray-500 lg:fill-orange-500 fill-white" />
                      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#ff0000] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        Compare Property
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-5 relative flex lg:flex-row flex-col w-full">

                <div className=" flex lg:flex-wrap flex-col lg:mx-0 mx-auto lg:gap-5 gap-2 items-center justify-between  text-gray-700">
                  <div className='relative flex gap-2 justify-between  items-center'>
                    <div className='flex flex-col'>
                      <h3 className="lg:text-[18px] sm:text-lg text-[15px] lg:text-left text-center font-semibold  mt-2 ">{prop.title}</h3>
                      <p className="text-[13px] w-full mt-1 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                  </div>
                  <div className='flex  pb-6 px-4 gap-5 lg:justify-between justify-center mx-auto items-center'>

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
                </div>


                <div className="flex flex-col lg:border-l lg:text-left text-center lg:border-gray-200 border-0 border-gray-200 lg:ps-15 px-2 py-5 justify-between">
                  <div className="float-top">
                    <span className='text-[12px] font-semibold'>For sale</span>
                    <p className="text-[#1CB2FF] lg:text-[25px] text-sm font-bold">${prop.price.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className='text-[11px] font-medium'>By Melissa William, John David</span>
                  </div>
                </div>
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

          {/* Categories */}
          <div className="px-4 py-8 rounded-lg lg:text-left text-center" data-aos="fade-up" data-aos-duration="1500">
            <h2 className="text-xl mb-4 text-[#041C33]" >Property Types</h2>
            <ul className="flex flex-col sm:flex-col-reverse md:flex-row lg:flex-col gap-3 lg:justify-start justify-center lg:items-start items-center  text-sm text-gray-700">
              {categories.map((cat, i) => (
                <li key={i} className="cursor-pointer">
                  <div className="hover:text-[#1CB2FF] flex justify-between items-center">
                    <span className="heading flex gap-1 font-semibold">
                      <VscTriangleRight />
                      {cat.title}
                    </span>
                  </div>

                  <ul className="ml-6 mt-2 space-y-1">
                    {cat.subcategories.map((sub, j) => (
                      <li
                        key={j}
                        className="flex gap-1 items-center text-gray-600 hover:text-[#1CB2FF]"
                      >
                        <VscTriangleRight className="text-xs" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {properties1.map((prop, index) => (
            <div key={index} className="bg-white relative rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-full relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${prop.image})` }}>

                <div className="absolute top-[-10px] left-0 bg-[#0054A5] text-white text-xs font-semibold px-5 py-1 rounded-br-md z-10" style={{ clipPath: "polygon(0% 0%, 87% 0, 100% 49%, 87% 100%, 0% 100%)" }}>
                  Featured
                </div>


                <div className="absolute bottom-0 flex flex-row justify-between items-center px-3 w-full p-1 ">
                  <div className=" ">
                    <span className="bg-[#ff7700] text-white rounded text-sm font-semibold py-2 px-4">{prop.sale}</span>
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ListLayout;


