
"use client";

import { useState } from "react";

const tabs = ["For You", "Following", "Latest"];

export default function FeedTabs() {
  const [activeTab, setActiveTab] = useState("For You");

  return (
    <div className="flex items-center gap-5 border-b border-border">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            relative py-3 text-sm font-medium
            transition-colors
            ${
              activeTab === tab
                ? "text-primary"
                : "text-muted hover:text-foreground"
            }
          `}
        >
          {tab}

          {activeTab === tab && (
            <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-primary" />
          )}
        </button>
      ))}
    </div>
  );
}
