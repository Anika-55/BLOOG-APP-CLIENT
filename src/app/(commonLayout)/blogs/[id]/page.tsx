//! This can be used only in client component
// import { useParams } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";



export async function generateStaticParams() {
  const { data} = await blogService.getBlogPosts();

  return data?.data?.map((blog: BlogPost) => ({ id: blog.id })).splice(0, 3);
}

export default async function BlogPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const { data: blog } = await blogService.getBlogById(id);

    const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    // Estimate reading time (average 200 words per minute)
    const wordCount = typeof blog?.content === 'string'
        ? blog.content.split(/\s+/).filter(Boolean).length
        : 0;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200));
    console.log(blog);

    return (
        <article className="mx-auto max-w-3xl px-4 py-14">
            {/* ===== Header ===== */}
            <header className="mb-10 space-y-5">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                    {blog.title}
                </h1>

                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span>{formattedDate}</span>
                    <span>•</span>
                    <span>{readingTime} min read</span>
                    <span>•</span>
                    <span>{blog.views} views</span>

                    {blog.isFeatured && (
                        <Badge variant="outline" className="ml-2 rounded-full">
                            ⭐ Featured
                        </Badge>
                    )}
                </div>
            </header>

            {/* ===== Content Card ===== */}
            <div className="rounded-2xl border bg-background p-6 md:p-10 shadow-sm">
                <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed">
                    <p className="whitespace-pre-wrap text-lg leading-8">
                        {blog.content}
                    </p>
                </div>
            </div>

            {/* ===== Footer ===== */}
            <footer className="mt-12 space-y-6">
                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag: string) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="rounded-full px-4 py-1 text-sm cursor-pointer hover:bg-muted transition"
                            >
                                #{tag}
                            </Badge>
                        ))}
                    </div>
                )}

                <Separator />

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{blog._count?.comments ?? 0} comments</span>
                    <span>Thanks for reading ✨</span>
                </div>
            </footer>
        </article>
    )

}