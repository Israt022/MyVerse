
import Link from "next/link";
import { ArrowLeft, Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-16">
      <div className="w-full max-w-lg text-center">
        {/* Illustration */}
        <div className="relative mx-auto mb-8 flex size-32 items-center justify-center rounded-full bg-surface-secondary">
          <span className="font-serif text-7xl font-bold text-[#7656D6]">
            4
          </span>
          <span className="absolute -right-2 top-2 flex size-12 items-center justify-center rounded-full bg-[#7656D6] text-white">
            <Compass size={25} />
          </span>
          <span className="font-serif text-7xl font-bold text-[#7656D6]">
            4
          </span>
        </div>

        {/* Content */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#7656D6]">
          Lost in MyVerse?
        </p>

        <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          This page doesn't exist.
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-muted sm:text-base">
          Looks like this creative space couldn't be found. The page may have
          been moved or the link might be incorrect.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#7656D6] px-6 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
          >
            <Home size={17} />
            Back to Home
          </Link>

          <Link
            href="/explore"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-surface-secondary sm:w-auto"
          >
            Explore MyVerse
            <ArrowLeft className="rotate-180" size={16} />
          </Link>
        </div>

        <p className="mt-12 text-xs text-muted">
          © 2026 MyVerse. A space for every creative soul.
        </p>
      </div>
    </main>
  );
}
