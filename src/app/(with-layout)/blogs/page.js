export const metadata = {
  title: "Blogs | Next Hero",
  description: "Next Hero",
};

const blogs = [
  {
    id: 1,
    year: 2016,
    title: "title 1",
  },
  {
    id: 2,
    year: 2016,
    title: "title 2",
  },
  {
    id: 3,
    year: 2016,
    title: "title 3",
  },
  {
    id: 4,
    year: 2016,
    title: "title 4",
  },
  {
    id: 5,
    year: 2016,
    title: "title 5",
  },
];

import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto">
      {blogs.map(({ id, year, title }) => (
        <Link 
        className="block border border-red-500 p-2 my-2" 
        href={{
            pathname:`blogs/${year}/${id}`,
            query: {
                title: title
            }
        }}
         key={id}
         >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
