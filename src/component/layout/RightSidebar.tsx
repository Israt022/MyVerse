import Link from "next/link";
import { ArrowRight } from "lucide-react";

const suggestedArtists = [
  { name: "Alex Morgan", username: "alexart", category: "Digital Artist" },
  { name: "Sarah James", username: "sarahdesign", category: "Photographer" },
  { name: "Ryan Cooper", username: "ryancreates", category: "Illustrator" },
];

const topics = [
  "Digital Art",
  "Photography",
  "Illustration",
  "Animation",
  "Graphic Design",
  "Concept Art",
];

const staffPicks = [
  {
    id: 4,
    author: "Emma Wilson",
    title: "How I built a consistent illustration style in 30 days",
  },
  {
    id: 2,
    author: "Sarah James",
    title: "Finding beauty in everyday moments",
  },
  {
    id: 5,
    author: "David Lee",
    title: "Color theory for people who hate color theory",
  },
];

export default function RightSidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-[96px] space-y-8 py-5">
        {/* Staff Picks (Medium style) */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold">Staff Picks</h2>

          <div className="space-y-4">
            {staffPicks.map((pick) => (
              <Link
                key={pick.id}
                href={`/story/${pick.id}`}
                className="group block"
              >
                <p className="text-xs text-muted">{pick.author}</p>
                <h3 className="mt-0.5 font-serif text-sm font-bold leading-snug group-hover:text-[#7656D6]">
                  {pick.title}
                </h3>
              </Link>
            ))}
          </div>

          <Link
            href="/explore"
            className="inline-flex items-center gap-1 text-xs text-[#7656D6]"
          >
            See the full list
            <ArrowRight size={14} />
          </Link>
        </section>

        {/* Who to follow */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold">Who to follow</h2>

          <div className="space-y-4">
            {suggestedArtists.map((artist) => (
              <div key={artist.username} className="flex items-center gap-3">
                <div className="size-10 shrink-0 rounded-full bg-surface-tertiary" />

                <Link
                  href={`/profile/${artist.username}`}
                  className="min-w-0 flex-1"
                >
                  <p className="truncate text-sm font-medium">
                    {artist.name}
                  </p>
                  <p className="truncate text-xs text-muted">
                    {artist.category}
                  </p>
                </Link>

                <button
                  className="
                    shrink-0 rounded-full border border-border
                    px-3 py-1 text-xs font-medium
                    transition-colors hover:border-[#7656D6]
                    hover:text-[#7656D6]
                  "
                >
                  Follow
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended topics */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold">Recommended topics</h2>

          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <Link
                key={topic}
                href={`/explore?tag=${encodeURIComponent(topic)}`}
                className="
                  rounded-full bg-surface-secondary px-3 py-1.5
                  text-xs text-muted transition-colors
                  hover:text-[#7656D6]
                "
              >
                {topic}
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="space-y-2">
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs text-muted">
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/help">Help</Link>
          </div>

          <p className="text-xs text-muted">© 2026 MyVerse</p>
        </div>
      </div>
    </aside>
  );
}