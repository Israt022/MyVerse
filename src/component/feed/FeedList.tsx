import FeedTabs from "./FeedTabs";
import ArtistStories from "./ArtistStories";
import PostCard from "./PostCard";

import { posts } from "@/data/posts";

export default function FeedList() {
  return (
    <div className="min-w-0 space-y-5 py-5">

      <FeedTabs />

      <ArtistStories />

      <section className="space-y-5">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

    </div>
  );
}
