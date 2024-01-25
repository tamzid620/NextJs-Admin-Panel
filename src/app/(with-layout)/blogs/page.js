

import loadBlogData from "@/utils/loadBlogData";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";


// eslint-disable-next-line @next/next/no-async-client-component
const Blogs = async () => {
  // const router = useRouter() ;

  const data = await loadBlogData() ;

  return (
    <div className="container mx-auto">
      {data.map(({ id, body, title }) => (
        <div  key={id} className="border border-red-500 p-2 my-2">
          <h2 className="text-2xl"> {id}. {title} </h2>
        <p>{body}</p>
        <Link className="inline-block mt-5" href={`blogs/${id}`}> 
       <button className="text-white px-2 py-1 bg-green-500"> Details </button>
        </Link>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
