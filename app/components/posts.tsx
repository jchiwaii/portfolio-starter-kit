import Link from "next/link";
import { getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();
  if (!allBlogs || allBlogs.length === 0) {
    return null;
  }

  let posts = allBlogs.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => {
        const imageSrc = `/assets/${post.slug}.png`;

        return (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden group"
          >
            <img
              src={imageSrc}
              alt={post.metadata.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-medium tracking-tight group-hover:underline">
                {post.metadata.title}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
