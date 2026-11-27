import {
  Search,
  PlusSquare,
  Bell,
  UserRound,
} from "lucide-react";

import { Button } from "@heroui/react";
import Logo from "../shared/Logo";

export default function Navbar() {
  return (
    <header
      className="
        sticky top-0 z-50 w-full
        border-b border-border
        bg-background
      "
    >
      <div
        className="
          mx-auto flex h-[60px] max-w-[1440px]
          items-center justify-between gap-3 px-3
          md:h-[72px] md:px-5
          xl:px-8
        "
      >
        {/* Logo */}
        <div className="shrink-0 text-xl font-bold">
          <Logo />
        </div>

        {/* Search */}
        <div
          className="
            hidden h-10 max-w-[440px] flex-1
            items-center gap-2 rounded-full
            border border-border px-4
            md:flex
          "
        >
          <Search size={18} className="text-muted" />

          <input
            type="text"
            placeholder="Search artists, posts..."
            className="
              w-full bg-transparent text-sm
              outline-none placeholder:text-muted
            "
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="hidden md:flex bg-[#7656D6]"
          >
            <PlusSquare size={17} />
            Create
          </Button>

          <button
            aria-label="Search"
            className="rounded-full p-2 md:hidden"
          >
            <Search size={20} />
          </button>

          <button aria-label="Notifications" className="p-2">
            <Bell size={20} />
          </button>

          <button aria-label="Profile" className="p-2">
            <UserRound size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
