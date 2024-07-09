import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreateBlog = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center py-7">
      <div className="px-8 md:px-48 lg:px-20 lg:w-1/2">
        <div>
          <input
            className="border-2 mb-7 w-full h-14 px-3 py-2 focus:outline-green-500"
            type="text"
            placeholder="Title"
          />
          <div className="h-96">
            <ReactQuill
              className="h-full"
              theme="snow"
              value={value}
              onChange={setValue}
            />
          </div>
        </div>
        <div className="absolute bottom-48">
          <button className="bg-green-500 hover:bg-green-700 rounded-md px-3 py-2 mb-7 text-white duration-200">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;

