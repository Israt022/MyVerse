"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  House,
  Compass,
  Users,
  Bookmark,
  Shapes,
  Bell,
  UserRound,
  Settings,
  PlusSquare,
} from "lucide-react";

const navigationItems = [
  { label: "Home", href: "/", icon: House },
  { label: "Explore", href: "/explore", icon: Compass },
  { label: "Following", href: "/following", icon: Users },
  { label: "Categories", href: "/categories", icon: Shapes },
  { label: "Saved", href: "/saved", icon: Bookmark },
  { label: "Notifications", href: "/notifications", icon: Bell },
  { label: "My Profile", href: "/profile", icon: UserRound },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <aside className="hidden md:block">
      <nav className="sticky top-[96px] flex flex-col gap-1 py-5">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              title={item.label}
              aria-current={active ? "page" : undefined}
              className={`
                flex items-center gap-3 rounded-lg px-3 py-3 text-sm
                transition-colors md:justify-center lg:justify-start
                ${
                  active
                    ? "bg-surface-secondary font-semibold text-[#7656D6]"
                    : "text-muted hover:bg-surface-secondary hover:text-foreground"
                }
              `}
            >
              <Icon size={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          );
        })}

        {/* Create CTA (desktop sidebar) */}
        <Link
          href="/create"
          className="
            mt-3 flex items-center justify-center gap-2
            rounded-full bg-[#7656D6] px-4 py-3
            text-sm font-medium text-white
            transition-opacity hover:opacity-90
          "
          title="Create"
        >
          <PlusSquare size={18} />
          <span className="hidden lg:block">Create</span>
        </Link>

        <div className="mt-4 border-t border-border pt-4">
          <Link
            href="/settings"
            title="Settings"
            className="
              flex items-center gap-3 rounded-lg px-3 py-3 text-sm
              text-muted transition-colors hover:bg-surface-secondary
              hover:text-foreground
              md:justify-center lg:justify-start
            "
          >
            <Settings size={20} />
            <span className="hidden lg:block">Settings</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}