
import Link from "next/link";

import {
  House,
  Compass,
  Users,
  Bookmark,
  Shapes,
  Bell,
  UserRound,
  Settings,
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
  return (
    <aside className="hidden md:block">
      <nav
        className="
          sticky top-[88px] flex flex-col gap-2
          py-5
        "
      >
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              title={item.label}
              className="
                flex items-center gap-3 rounded-lg
                px-3 py-3 text-sm
                text-muted transition-colors
                hover:bg-surface-secondary
                hover:text-foreground
                md:justify-center
                lg:justify-start
              "
            >
              <Icon size={20} />
              <span className="hidden lg:block">
                {item.label}
              </span>
            </Link>
          );
        })}

        <div className="mt-5 border-t border-border pt-4">
          <Link
            href="/settings"
            className="
              flex items-center gap-3 rounded-lg
              px-3 py-3 text-sm text-muted
              md:justify-center lg:justify-start
            "
          >
            <Settings size={20} />
            <span className="hidden lg:block">
              Settings
            </span>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
