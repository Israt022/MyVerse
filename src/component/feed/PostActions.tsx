"use client";

import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Eye,
  Bookmark,
  Share2,
} from "lucide-react";

import { formatCount } from "@/lib/format";
import type { Post } from "@/types/post";

export default function PostActions({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setLiked((v) => !v)}
          aria-label="Like post"
          aria-pressed={liked}
          className={`flex items-center gap-1.5 transition-colors ${
            liked ? "text-rose-500" : "text-muted hover:text-foreground"
          }`}
        >
          <Heart size={19} fill={liked ? "currentColor" : "none"} />
          <span className="text-xs">
            {formatCount(post.likes + (liked ? 1 : 0))}
          </span>
        </button>

        <button
          aria-label="View comments"
          className="flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
        >
          <MessageCircle size={19} />
          <span className="text-xs">{formatCount(post.comments)}</span>
        </button>

        <div className="flex items-center gap-1.5 text-muted">
          <Eye size={19} />
          <span className="text-xs">{formatCount(post.views)}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 text-muted">
        <button aria-label="Share post" className="hover:text-foreground">
          <Share2 size={18} />
        </button>

        <button
          onClick={() => setSaved((v) => !v)}
          aria-label="Save post"
          aria-pressed={saved}
          className={saved ? "text-[#7656D6]" : "hover:text-foreground"}
        >
          <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>
    </div>
  );
}