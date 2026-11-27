import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";

const suggestedArtists = [
  { name: "Alex Morgan", category: "Digital Artist" },
  { name: "Sarah James", category: "Photographer" },
  { name: "Ryan Cooper", category: "Illustrator" },
];

const trendingTags = [
  "#DigitalArt",
  "#Photography",
  "#Illustration",
  "#CreativeDesign",
];

export default function RightSidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-[92px] space-y-6 py-5">

        {/* Suggested Artists */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">
              Suggested Artists
            </h2>

            <Link
              href="/explore"
              className="text-xs text-primary"
            >
              See all
            </Link>
          </div>

          <div className="space-y-4">
            {suggestedArtists.map((artist) => (
              <div
                key={artist.name}
                className="flex items-center gap-3"
              >
                <div className="size-10 shrink-0 rounded-full bg-surface-tertiary" />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">
                    {artist.name}
                  </p>

                  <p className="text-xs text-muted">
                    {artist.category}
                  </p>
                </div>

                <button
                  aria-label={`Follow ${artist.name}`}
                  className="rounded-full p-2 text-primary hover:bg-accent"
                >
                  <Plus size={17} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Tags */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold">
              Trending Tags
            </h2>

            <ArrowRight size={16} className="text-muted" />
          </div>

          <div className="flex flex-wrap gap-2">
            {trendingTags.map((tag) => (
              <Link
                key={tag}
                href={`/explore?tag=${tag.replace("#", "")}`}
                className="
                  rounded-full bg-surface-secondary
                  px-3 py-1.5 text-xs text-muted
                  transition-colors hover:bg-accent
                  hover:text-primary
                "
              >
                {tag}
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Creator */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold">
            Featured Creator
          </h2>

          <div className="rounded-xl border border-border p-4">
            <div className="mb-3 size-12 rounded-full bg-surface-tertiary" />

            <h3 className="text-sm font-semibold">
              Creative Artist
            </h3>

            <p className="mt-1 text-xs text-muted">
              Featured creator of the week.
            </p>

            <Link
              href="/explore"
              className="mt-3 inline-flex items-center gap-1 text-xs text-primary"
            >
              Explore profile
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* Footer Links */}
        <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs text-muted">
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/help">Help</Link>
        </div>

        <p className="text-xs text-muted">
          © 2026 MyVerse
        </p>
      </div>
    </aside>
  );
}
