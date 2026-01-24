import Footer from "@/components/layout/footer";
import Hero from "@/components/layout/hero";
import BlogCard from "@/components/modules/homepage/BlogCard";

import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";

export default async function Home() {
  const { data } = await blogService.getBlogPosts(
    {
      isFeatured: false,
    },
    {
      cache: "no-store",
    }
  );

  // console.log(data);

  return (
    <> 
      <Hero/>
    <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-6 mt-5">
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
      </div>
      <Footer/>
       </>
  );
}