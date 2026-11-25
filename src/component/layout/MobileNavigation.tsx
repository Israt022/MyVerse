
import Link from "next/link";

import {
  House,
  Compass,
  PlusSquare,
  Heart,
  UserRound,
} from "lucide-react";

const mobileItems = [
  { label: "Home", href: "/", icon: House },
  { label: "Explore", href: "/explore", icon: Compass },
  { label: "Create", href: "/create", icon: PlusSquare },
  { label: "Activity", href: "/notifications", icon: Heart },
  { label: "Profile", href: "/profile", icon: UserRound },
];

export default function MobileNavigation() {
  return (
    <nav
      className="
        fixed inset-x-0 bottom-0 z-50
        flex items-center justify-around
        border-t border-border
        bg-background px-2 py-3
        md:hidden
      "
    >
      {mobileItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="
              flex flex-col items-center gap-1
              text-muted transition-colors
              hover:text-primary
            "
          >
            <Icon size={21} />

            <span className="text-[10px]">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
