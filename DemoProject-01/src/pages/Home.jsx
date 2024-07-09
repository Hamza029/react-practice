import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let blogs = [
    {
      id: "458a25aa-379a-11ef-bf41-088fc3196e05",
      authorId: "504f9c47-3798-11ef-bf41-088fc3196e05",
      title: "blog-1 user-b",
      description: "test",
      authorUsername: "a",
    },
    {
      id: "61e8f4b6-379a-11ef-bf41-088fc3196e05",
      authorId: "ee0764c5-3798-11ef-bf41-088fc3196e05",
      title: "blog-2 user-c",
      description: "another test",
      authorUsername: "b",
    },
    {
      id: "795a92e2-379a-11ef-bf41-088fc3196e05",
      authorId: "15ecf9f3-3799-11ef-bf41-088fc3196e05",
      title: "blog-3 user-d",
      description: "test blog description",
      authorUsername: "c",
    },
    {
      id: "8b7e2f0c-379a-11ef-bf41-088fc3196e05",
      authorId: "2a16f640-3799-11ef-bf41-088fc3196e05",
      title: "blog-4 user-e",
      description: "another test blog",
      authorUsername: "d",
    },
    {
      id: "a1b2f6f4-379a-11ef-bf41-088fc3196e05",
      authorId: "e1e00a3c-3798-11ef-bf41-088fc3196e05",
      title: "blog-5 user-f",
      description: "test description",
      authorUsername: "e",
    },
    {
      id: "b4a6a18a-379a-11ef-bf41-088fc3196e05",
      authorId: "609d36e0-3798-11ef-bf41-088fc3196e05",
      title: "blog-6 user-g",
      description: "yet another test",
      authorUsername: "f",
    },
    {
      id: "c9c58446-379a-11ef-bf41-088fc3196e05",
      authorId: "90ef3c20-3798-11ef-bf41-088fc3196e05",
      title: "blog-7 user-h",
      description: "description of blog",
      authorUsername: "g",
    },
    {
      id: "e1d26d7e-379a-11ef-bf41-088fc3196e05",
      authorId: "b7d2ee8b-3798-11ef-bf41-088fc3196e05",
      title: "blog-8 user-i",
      description: "test blog",
      authorUsername: "h",
    },
    {
      id: "f5f6b85c-379a-11ef-bf41-088fc3196e05",
      authorId: "dd43b878-3798-11ef-bf41-088fc3196e05",
      title: "blog-9 user-j",
      description: "blog description",
      authorUsername: "i",
    },
    {
      id: "0a4d6f7a-379b-11ef-bf41-088fc3196e05",
      authorId: "43b832f4-3799-11ef-bf41-088fc3196e05",
      title: "blog-10 user-k",
      description:
        "description of the blog sadhfljaslfjlkasdjflkdasjflkdjaslfkjaslkfjlakfjlakssafsafasdfasdfasdfafaffjlkafjlkajflkafjlafjl sadflkdjasflk",
      authorUsername: "j",
    },
    {
      id: "0a4d6f7a-379b-11ef-bf41-088fc3196e05",
      authorId: "43b832f4-3799-11ef-bf41-088fc3196e05",
      title: "blog-10 user-k",
      description:
        "description of the blog sadhfljaslfjlkasdjflkdasjflkdjaslfkjaslkfjlakfjlakssafsafasdfasdfasdfafaffjlkafjlkajflkafjlafjl sadflkdjasflk",
      authorUsername: "j",
    },
    {
      id: "0a4d6f7a-379b-11ef-bf41-088fc3196e05",
      authorId: "43b832f4-3799-11ef-bf41-088fc3196e05",
      title: "blog-10 user-k",
      description:
        "description of the blog sadhfljaslfjlkasdjflkdasjflkdjaslfkjaslkfjlakfjlakssafsafasdfasdfasdfafaffjlkafjlkajflkafjlafjl sadflkdjasflk",
      authorUsername: "j",
    },
    {
      id: "0a4d6f7a-379b-11ef-bf41-088fc3196e05",
      authorId: "43b832f4-3799-11ef-bf41-088fc3196e05",
      title: "blog-10 user-k",
      description:
        "description of the blog sadhfljaslfjlkasdjflkdasjflkdjaslfkjaslkfjlakfjlakssafsafasdfasdfasdfafaffjlkafjlkajflkafjlafjl sadflkdjasflk",
      authorUsername: "j",
    },
    {
      id: "0a4d6f7a-379b-11ef-bf41-088fc3196e05",
      authorId: "43b832f4-3799-11ef-bf41-088fc3196e05",
      title: "blog-10 user-k",
      description:
        "description of the blog sadhfljaslfjlkasdjflkdasjflkdjaslfkjaslkfjlakfjlakssafsafasdfasdfasdfafaffjlkafjlkajflkafjlafjl sadflkdjasflk",
      authorUsername: "j",
    },
    {
      id: "0a4d6f7a-379b-11ef-bf41-088fc3196e05",
      authorId: "43b832f4-3799-11ef-bf41-088fc3196e05",
      title: "blog-10 user-k",
      description:
        "description of the blog sadhfljaslfjlkasdjflkdasjflkdjaslfkjaslkfjlakfjlakssafsafasdfasdfasdfafaffjlkafjlkajflkafjlafjl sadflkdjasflk",
      authorUsername: "j",
    },
    {
      id: "0a4d6f7a-379b-11ef-bf41-088fc3196e05",
      authorId: "43b832f4-3799-11ef-bf41-088fc3196e05",
      title: "blog-10 user-k",
      description:
        "description of the blog sadhfljaslfjlkasdjflkdasjflkdjaslfkjaslkfjlakfjlakssafsafasdfasdfasdfafaffjlkafjlkajflkafjlafjl sadflkdjasflk",
      authorUsername: "j",
    },
    {
      id: "0a4d6f7a-379b-11ef-bf41-088fc3196e05",
      authorId: "43b832f4-3799-11ef-bf41-088fc3196e05",
      title: "blog-10 user-k",
      description:
        "description of the blog sadhfljaslfjlkasdjflkdasjflkdjaslfkjaslkfjlakfjlakssafsafasdfasdfasdfafaffjlkafjlkajflkafjlafjl sadflkdjasflk",
      authorUsername: "j",
    },
    {
      id: "0a4d6f7a-379b-11ef-bf41-088fc3196e05",
      authorId: "43b832f4-3799-11ef-bf41-088fc3196e05",
      title: "blog-10 user-k",
      description:
        "description of the blog sadhfljaslfjlkasdjflkdasjflkdjaslfkjaslkfjlakfjlakssafsafasdfasdfasdfafaffjlkafjlkajflkafjlafjl sadflkdjasflk",
      authorUsername: "j",
    },
    {
      id: "0a4d6f7a-379b-11ef-bf41-088fc3196e05",
      authorId: "43b832f4-3799-11ef-bf41-088fc3196e05",
      title: "blog-10 user-k",
      description:
        "description of the blog sadhfljaslfjlkasdjflkdasjflkdjaslfkjaslkfjlakfjlakssafsafasdfasdfasdfafaffjlkafjlkajflkafjlafjl sadflkdjasflk",
      authorUsername: "j",
    },
    {
      id: "0a4d6f7a-379b-11ef-bf41-088fc3196e05",
      authorId: "43b832f4-3799-11ef-bf41-088fc3196e05",
      title: "blog-10 user-k",
      description:
        "description of the blog sadhfljaslfjlkasdjflkdasjflkdjaslfkjaslkfjlakfjlakssafsafasdfasdfasdfafaffjlkafjlkajflkafjlafjl sadflkdjasflk",
      authorUsername: "j",
    },
  ];

  return (
    <div className="py-7">
      <div className="grid grid-cols-1 gap-4 mx-10 md:grid-cols-2 md:mx-20 lg:grid-cols-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow p-5 flex flex-col justify-between"
          >
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 break-all">
                {blog.title}
              </h5>
              <p className="mb-3 font-normal text-gray-500 break-all">
                Author: {blog.authorUsername}
              </p>
              <p className="mb-3 font-normal text-gray-700 break-all">
                {blog.description}
              </p>
            </div>
            <div>
              <Link
                to={`/blog/${blog.id}`}
                className="px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

