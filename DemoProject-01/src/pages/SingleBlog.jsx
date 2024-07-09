import React from "react";

const SinglePost = () => {
  return (
    <div className="px-8 md:px-48 lg:px-20 lg:w-1/2">
      <div className="flex flex-col justify-start items-start">
        <div>
          <div className="text-5xl mb-7 font-bold text-gray-900">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </div>
          <div className="mb-7">
            <button className="px-3 py-2 rounded-md text-white bg-green-500 hover:bg-green-700 duration-200 mr-2">
              Update
            </button>
            <button className="px-3 py-2 rounded-md text-white bg-red-500 hover:bg-red-700 duration-200">
              Update
            </button>
          </div>
          <div className="mb-7 font-medium">Author: hamza029</div>
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
          praesentium nostrum repellendus sequi perferendis! Molestiae corrupti
          expedita aspernatur ex adipisci illo, labore pariatur fugit,
          architecto eius natus ipsam dicta voluptatem! Officiis dolore
          laboriosam minima error, quam esse nisi voluptatum possimus earum
          nemo, praesentium maxime molestiae blanditiis a quos quasi deserunt
          rerum distinctio quisquam. Numquam ullam odit neque est rerum
          accusamus saepe laboriosam quasi earum reiciendis perspiciatis dolore,
          velit enim quae eaque iste similique, praesentium iusto sint! Ducimus
          ad, molestiae eligendi sint voluptatem aut vel repellat aliquam.
          Maxime consequuntur exercitationem neque necessitatibus quos
          asperiores nam ea vel, expedita esse ab dolorum.
        </div>
      </div>
    </div>
  );
};

export default SinglePost;

