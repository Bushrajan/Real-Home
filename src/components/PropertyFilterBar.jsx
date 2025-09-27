import { useState } from "react";
import { FaSearch, FaSearchPlus } from "react-icons/fa";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

export default function PropertyFilterBar() {
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

    return (
        <div className="relative p-5">
            <div className="max-w-5xl mx-auto lg:bg-[linear-gradient(90deg,_rgba(255,255,255,1)_81%,_rgba(28,178,255,1)_73%)] w-full h-full shadow-md rounded-lg lg:p-0 flex lg:flex-row flex-col  gap-4 items-center lg:justify-between justify-center">
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
                                        className="flex items-center  gap-2 lg:w-[250px] px-3 py-4 text-sm  rounded   justify-start"
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
                                            {item.options.map((opt, j) => (
                                                <li
                                                    key={j}
                                                    onClick={() => handleSelect(item.name, opt)}
                                                    className="px-4 py-2 text-sm hover:bg-[#1cb3ff7d] hover:text-white cursor-pointer transition"
                                                >
                                                    {opt}
                                                </li>
                                            ))}
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
                                                <option key={j}>{opt} <VscTriangleDown className="text-[#1CB2FF]" /></option>
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
                <div className="relative flex lg:flex-row flex-col justify-between gap-3 me-3 rounded">
                    <button className="py-8 flex gap-2 hover:border-blue-300 hover:border text-[#1896D6] px-5 text-[11px] hover:bg-[#0cacf0] transition w-full sm:w-auto">
                        <FaSearchPlus className="text-white ms-2 mr-2" />
                    </button>
                    <button className="py-8 flex gap-2 hover:border-blue-300 hover:border text-white px-3 text-[11px] hover:bg-[#0cacf0] transition w-full sm:w-auto">
                        <FaSearch className="text-white mr-2" />
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}