export type PostType = "artwork" | "story" | "video";

export type Post = {
  id: number;
  type: PostType;
  username: string;
  displayName: string;
  category: string;
  title: string;
  caption: string;
  tags: string[];
  likes: number;
  comments: number;
  views: number;
  readTime?: number; // only for story (minutes)
  createdAt: string; // e.g. "2h ago" (later: ISO date)
};