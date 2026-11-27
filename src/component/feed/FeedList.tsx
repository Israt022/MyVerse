"use client";

import { useState } from "react";

import FeedTabs from "./FeedTabs";
import Composer from "./Composer";
import PostCard from "./PostCard";

import { posts } from "@/data/posts";
import type { PostType } from "@/types/post";

const filters: { label: string; value: PostType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Artwork", value: "artwork" },
  { label: "Stories", value: "story" },
  { label: "Videos", value: "video" },
];

export default function FeedList() {
  const [filter, setFilter] = useState<PostType | "all">("all");

  const visiblePosts =
    filter === "all" ? posts : posts.filter((p) => p.type === filter);

  return (
    <div className="min-w-0 space-y-5 py-5">
      <Composer />

      <FeedTabs />

      {/* Type filter chips */}
      <div className="flex gap-2 overflow-x-auto">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`
              shrink-0 rounded-full border px-3.5 py-1.5
              text-xs font-medium transition-colors
              ${
                filter === f.value
                  ? "border-transparent bg-[#7656D6] text-white"
                  : "border-border text-muted hover:text-foreground"
              }
            `}
          >
            {f.label}
          </button>
        ))}
      </div>

      <section className="space-y-5">
        {visiblePosts.length > 0 ? (
          visiblePosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className="py-16 text-center text-sm text-muted">
            No posts here yet.
          </p>
        )}
      </section>
    </div>
  );
}