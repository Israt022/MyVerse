import Link from "next/link";
import { MoreHorizontal, Play } from "lucide-react";

import PostActions from "./PostActions";
import StoryCard from "./StoryCard";

import { getPlaceholderGradient } from "@/lib/placeholder";
import type { Post } from "@/types/post";

type PostCardProps = {
  post: Post;
};

export function PostHeader({ post }: PostCardProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="size-10 shrink-0 rounded-full bg-surface-tertiary" />

      <div className="min-w-0 flex-1">
        <Link
          href={`/profile/${post.username}`}
          className="block truncate text-sm font-semibold hover:text-[#7656D6]"
        >
          {post.displayName}
        </Link>

        <p className="truncate text-xs text-muted">
          {post.category} · {post.createdAt}
        </p>
      </div>

      <button aria-label="More post options" className="p-1 text-muted">
        <MoreHorizontal size={20} />
      </button>
    </div>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/explore?tag=${tag}`}
          className="
            rounded-full bg-surface-secondary px-2.5 py-1
            text-xs text-muted transition-colors
            hover:text-[#7656D6]
          "
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}

export default function PostCard({ post }: PostCardProps) {
  if (post.type === "story") {
    return <StoryCard post={post} />;
  }

  return (
    <article className="overflow-hidden rounded-xl border border-border">
      <div className="p-4 pb-3">
        <PostHeader post={post} />
      </div>

      {/* Media */}
      <div
        className={`
          relative flex aspect-[4/3] w-full items-center
          justify-center bg-gradient-to-br
          ${getPlaceholderGradient(post.id)}
        `}
      >
        {post.type === "video" && (
          <span className="flex size-14 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur">
            <Play size={24} fill="currentColor" />
          </span>
        )}
      </div>

      <div className="space-y-3 p-4">
        <div>
          <h3 className="text-base font-semibold">{post.title}</h3>
          <p className="mt-1 text-sm text-muted">{post.caption}</p>
        </div>

        <TagList tags={post.tags} />

        <div className="border-t border-border pt-3">
          <PostActions post={post} />
        </div>
      </div>
    </article>
  );
}