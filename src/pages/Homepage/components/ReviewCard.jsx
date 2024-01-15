import { Comma, Star } from "assets/icons/svgIcons";
import React from "react";

function ReviewCard({ message, image, name }) {
  return (
    <div className="sm:h-[18rem] sm:w-[550px] mr-5 relative grid sm:grid-cols-3 gap-4 bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="py-6 pt-10 pl-8 sm:pt-6 sm:col-span-2 flex-center">
        {/* container  */}
        <div>
          {/* rating starts */}
          <div className="flex gap-2 mb-3">
            {[...Array(5)].map((number, index) => (
              <Star />
            ))}
          </div>

          {/* review message */}
          <p className="text-400 text-textGray">{message}</p>
        </div>
      </div>

      {/* review image and name */}
      <div className="p-8 sm:col-span-1 flex-center bg-bgGray">
        {/* image and name container  */}
        <div>
          {/* image */}
          <div className="mx-auto rounded-full w-1/1 h-1/2">
            <img
              src={image}
              alt="image"
              className="object-cover w-full h-rull"
            />
          </div>
          {/* name  */}
          <p className="mt-2 font-bold text-center text-400">{name}</p>
        </div>
      </div>
      <div className="absolute top-4 text-800 right-4">
        <Comma />
      </div>
    </div>
  );
}

export default ReviewCard;
