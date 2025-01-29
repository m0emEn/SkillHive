import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";
import Bell from "../assets/images/icons/Bell";
import { motion } from "framer-motion";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="  p-4 w-full ">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-0 h-auto md:h-16 space-y-4 md:space-y-0">
        <div className="md:text-left md:w-3/8 w-full flex justify-between md:block">
          <div>
            <h1 className="text-lg font-semibold">Hi, Moemen</h1>
            <p className="text-gray-500">Find your lessons today!</p>
          </div>
          <div className="block md:hidden">
            <Bell color={"#2C2C2C"} size={20} />
          </div>
        </div>
        <div className="relative flex items-center w-full md:w-full">
          <Search className="absolute left-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search now..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/*<button
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 ml-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <SlidersHorizontal size={18} />
          </button>*/}
        </div>
      </div>
      {/*menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-37 mt-2 w-48 z-10 bg-white border border-gray-200 rounded-lg shadow-lg"
        >
          <ul className="py-2 text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Filter 1
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Filter 2
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Filter 3
            </li>
          </ul>
        </motion.div>
      )*/}
    </div>
  );
}
