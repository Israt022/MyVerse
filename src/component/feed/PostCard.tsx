import Link from "next/link";

import {
  Heart,
  MessageCircle,
  Eye,
  Bookmark,
  Share2,
  MoreHorizontal,
} from "lucide-react";

export type Post = {
  id: number;
  username: string;
  category: string;
  caption: string;
  likes: number;
  comments: number;
  views: number;
  mediaType: "image" | "video";
};

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-border">

      {/* Post Header */}
      <div className="flex items-center gap-3 p-3">
        <div className="size-10 shrink-0 rounded-full bg-surface-tertiary" />

        <div className="min-w-0 flex-1">
          <Link
            href={`/profile/${post.username}`}
            className="text-sm font-semibold hover:text-primary"
          >
            {post.username}
          </Link>

          <p className="text-xs text-muted">
            {post.category}
          </p>
        </div>

        <button aria-label="More post options">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Post Media */}
      <div className="relative aspect-[4/3] w-full bg-surface-tertiary">
        {post.mediaType === "image" ? (
          <div className="flex h-full items-center justify-center text-muted">
            Image placeholder
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-muted">
            Video placeholder
          </div>
        )}
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-4">
          <button
            aria-label="Like post"
            className="flex items-center gap-1"
          >
            <Heart size={20} />
            <span className="text-xs">{post.likes}</span>
          </button>

          <button
            aria-label="View comments"
            className="flex items-center gap-1"
          >
            <MessageCircle size={20} />
            <span className="text-xs">{post.comments}</span>
          </button>

          <div className="flex items-center gap-1 text-muted">
            <Eye size={20} />
            <span className="text-xs">{post.views}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button aria-label="Share post">
            <Share2 size={19} />
          </button>

          <button aria-label="Save post">
            <Bookmark size={19} />
          </button>
        </div>
      </div>

      {/* Caption */}
      <div className="px-3 pb-4">
        <p className="text-sm">
          <span className="font-semibold">
            {post.username}
          </span>{" "}
          {post.caption}
        </p>
      </div>
    </article>
  );
}
