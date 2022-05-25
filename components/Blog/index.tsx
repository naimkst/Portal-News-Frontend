import React from "react";
import Link from 'next/link'
import Moment from 'react-moment';
import Image from 'next/image'


export default function Blog({ data }: any) {
  const now = new Date();
  return (
    <>
    {/* {JSON.stringify( data )} */}
      <link
        rel="stylesheet"
        href="https://cdn.tailgrids.com/tailgrids-fallback.css"
      />

      <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Our Blogs
                </span>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  Our Recent News
                </h2>
                <p className="text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            { 
              data?.map((blog: any)=> (
                <div key={ blog.id } className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="max-w-[370px] mx-auto mb-10">
                  <div className="rounded overflow-hidden mb-8">
                    { 
                    blog.image ? <Image
                    src={`http://localhost:3000/posts/post-image/${blog.image}`}
                    alt="image"
                    className="w-full h-70 object-cover"
                  /> : <Image
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg"
                    alt="image"
                    className="w-full"
                  />
                    
                    }
                    
                  </div>
                  <div>
                    <span
                      className="
                       bg-primary
                       rounded
                       inline-block
                       text-center
                       py-1
                       px-4
                       text-xs
                       leading-loose
                       font-semibold
                       text-white
                       mb-5
                       "
                    >
                      <Moment date={blog.createdAt} format="D MMM YYYY"/>
                    </span>
                    <h3>
                      <Link href={`/blog/${blog.id}`}>
                      <a
                        className="
                          font-semibold
                          text-xl
                          sm:text-2xl
                          lg:text-xl
                          xl:text-2xl
                          mb-4
                          inline-block
                          text-dark
                          hover:text-primary
                          "
                      >
                        { blog?.title }
                      </a>
  
                      </Link>
                    </h3>
                    <p className="text-base text-body-color">
                      { blog?.content.substring(0, 120) }
                    </p>
                  </div>
                </div>
              </div>
              ))
            }
           

          </div>
        </div>
      </section>
    </>
  );
}
