import React from "react";
import Moment from 'react-moment';

export default function SingleBlog({ data }) {
  return (
    <>
      {/* <style>
  .pt-\[17\%\] {
    padding-top: 17%;
  }
  .mt-\[-10\%\] {
    margin-top: -10%;
  }
  .pt-\[56\.25\%\] {
    padding-top: 56.25%;
  }
</style> */}

{/* { JSON.stringify(data) } */}

      <main className="relative container mx-auto bg-white px-4">
        <div className="relative -mx-4 top-0 pt-[17%] overflow-hidden">
          <img
            className="absolute inset-0 object-cover object-top w-full h-full filter blur"
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uY2VydCUyMHBvc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt=""
          />
        </div>

        <div className="mt-[-10%] w-1/2 mx-auto">
          <div className="relative pt-[56.25%] overflow-hidden rounded-2xl">
            { data.image ? <img
              className="w-full h-full absolute inset-0 object-cover"
              src={ `http://localhost:3000/posts/post-image/${data?.image}` }
              alt=""
            /> : <img
            className="w-full h-full absolute inset-0 object-cover"
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uY2VydCUyMHBvc3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt=""
          /> }
            
          </div>
        </div>

        <article className="max-w-prose mx-auto py-8">
          <h1 className="text-2xl font-bold">
            { data.title }
          </h1>
          <h2 className="mt-2 text-sm text-gray-500"><Moment date={data.createdAt} format="D MMM YYYY"/></h2>

          <p className="mt-6">
            { data.content }
          </p>
        </article>
      </main>
    </>
  );
}
