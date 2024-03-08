import { ClearIcon } from "assets/icons/svgIcons";
import React from "react";

function ImagePreview({ selectedImages, clearSelectedImages }) {
  return (
    <div>
      {selectedImages?.length ? (
        <div className="relative z-10 grid grid-cols-3 gap-1 p-4 border rounded-md">
          <button
            onClick={clearSelectedImages}
            className="absolute z-50 p-1 text-white bg-red-100 rounded-md top-3 right-3 text-100"
          >
            <ClearIcon />
          </button>
          {selectedImages.map((image, index) => (
            <div key={index} className="h-[10rem] bg-bgGray">
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="font-light text-center text-textGray text-200">
          No images selected
        </p>
      )}
    </div>
  );
}

export default ImagePreview;
