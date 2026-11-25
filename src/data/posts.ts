// import type { Post } from "@/components/feed/PostCard";

import { Post } from "@/component/feed/PostCard";

export const posts: Post[] = [
  {
    id: 1,
    username: "alexart",
    category: "Digital Art",
    caption: "A little dream I created today.",
    likes: 1200,
    comments: 86,
    views: 8500,
    mediaType: "image",
  },
  {
    id: 2,
    username: "sarahdesign",
    category: "Photography",
    caption: "Finding beauty in everyday moments.",
    likes: 850,
    comments: 42,
    views: 4200,
    mediaType: "image",
  },
  {
    id: 3,
    username: "ryancreates",
    category: "Animation",
    caption: "A small animation experiment.",
    likes: 560,
    comments: 28,
    views: 3100,
    mediaType: "video",
  },
];
