import Link from "next/link";
import { Image as ImageIcon, PenLine, Video } from "lucide-react";

const options = [
  { label: "Artwork", href: "/create?type=artwork", icon: ImageIcon },
  { label: "Story", href: "/create?type=story", icon: PenLine },
  { label: "Video", href: "/create?type=video", icon: Video },
];

export default function Composer() {
  return (
    <section className="rounded-xl border border-border p-4">
      <div className="flex items-center gap-3">
        <div className="size-10 shrink-0 rounded-full bg-surface-tertiary" />

        <Link
          href="/create"
          className="
            flex h-10 flex-1 items-center rounded-full
            bg-surface-secondary px-4 text-sm text-muted
            transition-colors hover:bg-surface-tertiary
          "
        >
          Share your creativity...
        </Link>
      </div>

      <div className="mt-3 flex items-center gap-1 border-t border-border pt-3">
        {options.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="
                flex flex-1 items-center justify-center gap-2
                rounded-lg py-2 text-xs font-medium text-muted
                transition-colors hover:bg-surface-secondary
                hover:text-[#7656D6]
              "
            >
              <Icon size={17} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}