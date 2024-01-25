import loadSingleBlogData from "@/utils/loadSingleBlogData";
import Link from "next/link";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const {title} = await loadSingleBlogData(params.id);
  return{
    title : title, 
  }
}

const singleBlog = async ({ params }) => {
  const {id, title, body} = await loadSingleBlogData(params.id);

  return (
    <div key={id} className="border border-red-500 p-2 mx-2 my-2">
      <h2 className="text-2xl">
        {id}. {title}
      </h2>
      <p>{body}</p>

    </div>
  );
};

export default singleBlog;
