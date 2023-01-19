import Head from "next/head";
import { PostCard, PostWidget, Categories, Footer } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections/index";

const Home = ({ posts }) => {
  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <Head>
          <title>AsSunnah Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, id) => (
              <PostCard post={post.node} key={id} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
