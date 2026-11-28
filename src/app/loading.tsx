
import { Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex min-h-[70vh] w-full flex-col items-center justify-center px-5 py-12">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative mb-5 flex size-14 items-center justify-center rounded-2xl bg-[#7656D6]/10">
          <span className="font-serif text-3xl font-bold text-[#7656D6]">
            M
          </span>
          <Sparkles
            size={17}
            className="absolute -right-1 -top-1 text-[#7656D6]"
          />
        </div>

        <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground">
          My<span className="font-normal italic text-[#7656D6]">Verse</span>
        </h2>

        <div className="mt-5 flex items-center gap-2">
          <span className="size-1.5 animate-bounce rounded-full bg-[#7656D6]" />
          <span className="size-1.5 animate-bounce rounded-full bg-[#7656D6] [animation-delay:150ms]" />
          <span className="size-1.5 animate-bounce rounded-full bg-[#7656D6] [animation-delay:300ms]" />
        </div>

        <p className="mt-3 text-xs text-muted">
          Bringing creativity together...
        </p>
      </div>

      {/* Feed Skeleton */}
      <div className="mt-12 w-full max-w-xl space-y-5">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-xl border border-border"
          >
            <div className="flex items-center gap-3 p-4">
              <div className="size-10 animate-pulse rounded-full bg-surface-tertiary" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-28 animate-pulse rounded-full bg-surface-tertiary" />
                <div className="h-2.5 w-20 animate-pulse rounded-full bg-surface-tertiary" />
              </div>
            </div>

            <div className="aspect-[4/3] w-full animate-pulse bg-surface-secondary" />

            <div className="space-y-3 p-4">
              <div className="h-3 w-2/3 animate-pulse rounded-full bg-surface-tertiary" />
              <div className="h-2.5 w-full animate-pulse rounded-full bg-surface-tertiary" />
              <div className="h-2.5 w-1/2 animate-pulse rounded-full bg-surface-tertiary" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
