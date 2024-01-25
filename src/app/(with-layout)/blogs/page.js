

import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";


// eslint-disable-next-line @next/next/no-async-client-component
const Blogs = async () => {
  // const router = useRouter() ;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div className="container mx-auto">
      {data.map(({ id, body, title }) => (
        <div  key={id} className="border border-red-500 p-2 my-2">
          <h2 className="text-2xl"> {id}. {title} </h2>
        <p>{body}</p>
        <Link className="block bg-slate-400" href={`blogs/${id}`}> Details </Link>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
