import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const singleBlog = ({ params }) => {

  return (
    <div>
      SingleBLog {params.id}
    </div>
  );
};

export default singleBlog;
