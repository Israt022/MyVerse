import Link from "next/link";

import PostActions from "./PostActions";
import { PostHeader, TagList } from "./PostCard";

import { getPlaceholderGradient } from "@/lib/placeholder";
import type { Post } from "@/types/post";

export default function StoryCard({ post }: { post: Post }) {
  return (
    <article className="space-y-4 rounded-xl border border-border p-4">
      <PostHeader post={post} />

      {/* Medium-style: text left, thumbnail right */}
      <div className="flex items-start gap-4">
        <div className="min-w-0 flex-1">
          <Link href={`/story/${post.id}`} className="group block">
            <h3 className="font-serif text-xl font-bold leading-snug group-hover:text-[#7656D6]">
              {post.title}
            </h3>

            <p className="mt-2 line-clamp-3 text-sm text-muted">
              {post.caption}
            </p>
          </Link>

          <p className="mt-3 text-xs text-muted">
            {post.readTime} min read
          </p>
        </div>

        <div
          className={`
            h-24 w-24 shrink-0 rounded-lg bg-gradient-to-br
            sm:h-28 sm:w-28
            ${getPlaceholderGradient(post.id)}
          `}
        />
      </div>

      <TagList tags={post.tags} />

      <div className="border-t border-border pt-3">
        <PostActions post={post} />
      </div>
    </article>
  );
}