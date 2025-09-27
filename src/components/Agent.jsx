import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";

export default function Agent() {
    const agents = [
        {
            name: "Nathan James",
            phone: "+1-234-456-7893",
            email: "robot@inspirythemes.com",
            listed: 4,
            image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-1-1-300x300.jpg",
        },
        {
            name: "Melissa William",
            phone: "+1-234-456-7892",
            email: "robot@inspirythemes.com",
            listed: 4,
            image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-7-1-300x300.jpg",
        },
        { 
            name: "Alice Brian",
            phone: "+1-234-456-7891",
            email: "robot@inspirythemes.com",
            listed: 3,
            image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-female-6.jpg",
        },
        { 
            name: "John David",
            phone: "+1-234-456-7890",
            email: "robot@inspirythemes.com",
            listed: 5,
            image: "https://sample.realhomes.io/modern03/wp-content/uploads/sites/4/2020/05/agent-male-2.jpg",
        },
    ];

    motion
    return (
        <div className="agentdiv">
            <div className="col-span-4 text-center mt-15 lg:mt-1 mb-10">
                <h1 className="text-[13px] font-bold text-[#1CB2FF]"> Meet</h1>
                <h2 className="text-3xl font-bold text-gray-800">Our Agents</h2>
                <p className="text-gray-500 mb-6">We have best team to help you find best deal</p>

            </div>
            <div className="max-w-7xl mx-auto lg:px-4 py-5 flex lg:flex-row  flex-wrap justify-center items-center lg:gap-0 hover:gap-1  gap-5">

                {agents.map((agent, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                        className="relative bg-white lg:h-[500px] border border-gray-100 text-center h-[auto] w-[300px] lg:py-10 py-4 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                    >
                        <div className="overflow-hidden"                   >
                            <img src={agent.image} alt="agent img" className="h-35 mx-auto rounded-full bg-cover bg-center" />
                        </div>

                        <div className="p-4">
                            <div className="flex items-center justify-center mb-2 gap-3">
                                <h3 className="text-lg font-bold text-[black]  group-hover:text-[#1CB2FF] transition-colors duration-300">
                                    {agent.name}
                                </h3>
                                <span className="text-xs bg-[#1CB2FF] text-white px-1 py-1 rounded-full"> <TiTick /></span>
                            </div>
                            <p className="text-sm lg:mt-5 mt-1 text-[#1CB2FF] ">{agent.phone}</p>
                            <p className="text-sm lg:mt-5 mt-1 text-gray-900">{agent.email}</p>

                            <div
                                className="mt-4 flex-col flex  text-[#0054A5] font-semibold"
                            >
                                <span className="lg:text-[25px] text-[15px] text-[#1CB2FF] transition-colors duration-300">{agent.listed}</span>
                                <span> Listed Properties</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

    );
}