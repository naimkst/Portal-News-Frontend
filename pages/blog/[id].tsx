import React from 'react'
import SingleBlog from '../../components/SingleBlog'
import { getContentData } from '../../service/posts';

export default function SinglePost({ data }: any) {
  return (
    <>
      <SingleBlog data={ data } />
    </>
  )
}

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const curentId = await getContentData(context.query.id);
  const data = await getContentData(curentId.id);
//   console.log(context)
  return {
    props: { data },
  };
}