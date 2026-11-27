import Link from "next/link";

const artists = [
  { name: "Alex", username: "alexart" },
  { name: "Sarah", username: "sarahdesign" },
  { name: "Ryan", username: "ryancreates" },
  { name: "Emma", username: "emmaphoto" },
  { name: "David", username: "davidart" },
];

export default function ArtistStories() {
  return (
    <section className="overflow-hidden">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">
          Artists to discover
        </h2>

        <Link
          href="/explore"
          className="text-xs text-primary"
        >
          See all
        </Link>
      </div>

      <div className="mt-4 flex gap-4 overflow-x-auto pb-3">
        {artists.map((artist) => (
          <Link
            key={artist.username}
            href={`/profile/${artist.username}`}
            className="
              flex min-w-[64px] flex-col
              items-center gap-2
            "
          >
            <div className="size-14 rounded-full bg-surface-tertiary" />

            <span className="max-w-[68px] truncate text-xs">
              {artist.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
