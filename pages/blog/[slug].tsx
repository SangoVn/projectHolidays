import Head from 'next/head';
export default function BlogPost(blog:any) {
  return (
    <div>
      <Head>
        <title>{blog.title} | My Site</title>
      </Head>
      <div>
        <h1>{blog.title}</h1>
        <p>{blog.text}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps(query:any) {
  const res = await fetch(`https://www.example.com/api/blog/${query.slug}`);
  const data = await res.json();

  return {
    props: {
      blog: data,
    },
  };
}

