import { useState } from "react";
import { Clock } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Heart } from "lucide-react";
import { IoHeart } from "react-icons/io5";

export default function CourseCard({
  title,
  cateogry,
  lessons,
  image,
  author,
  rating,
  duration,
}) {
  const [fave, setFave] = useState(true);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-64">
      <div className="relative">
        <img
          src={image}
          alt="Course Preview"
          width={240}
          height={160}
          className="rounded-xl"
        />
        <button
          className="absolute -top-1.5 -right-1.25  bg-white  p-1 rounded-full cursor-pointer"
          onClick={() => setFave(!fave)}
        >
          {fave ? (
            <Heart size={20} color="#AEAEAE" />
          ) : (
            <IoHeart size={20} color="#FF4C4C" />
          )}
        </button>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">
          {cateogry} <span>({lessons} lesson)</span>
        </p>
        <div className="flex items-center justify-between mt-8 text-sm">
          <div className="flex items-center text-blue-500">
            <Clock size={16} className="mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-yellow-500">
            <FaStar size={16} className="mr-1" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
