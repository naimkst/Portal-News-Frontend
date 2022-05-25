import React from "react";
import { getAlltData } from "../../service/posts";
import Link from 'next/link'
import Image from 'next/image'


function Hero({ data }: any) {
    const blog = data[0];
  return (
    <>
      {/* {JSON.stringify(blog)} */}
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:mx-12 md:order-2">
            <h1 className="text-3xl font-medium tracking-wide text-gray-800 dark:text-white md:text-4xl">
              { blog?.title }
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              { `${blog?.content.substring(0, 230)}...` }
            </p>
            <div className="mt-6">
                <Link href={`blog/${blog?.id}`}>
              <a className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400">
                View More
              </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
        
        { blog.image ? 
            <Image
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={`http://localhost:3000/posts/post-image/${blog.image}`}
            alt="apple watch photo"
          />
        : 
            <Image
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="apple watch photo"
          />
        }
          
        </div>
      </div>
    </>
  );
}
// This gets called on every request

export default Hero