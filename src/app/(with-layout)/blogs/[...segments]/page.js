'use client' ;

import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const singleBlog = ({ params, searchParams }) => {
  const [year, id] = params.segments || [];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params2 = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const searchParams2 = useSearchParams();
  
  // console.log(params2.segments.split("/"), searchParams2.get("title"));

  return (
    <div>
      SingleBLog {year || new Date().getFullYear()} for {id}
      <br />
      {searchParams.title}
    </div>
  );
};

export default singleBlog;
