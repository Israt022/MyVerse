import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      className="
        mx-auto grid w-full max-w-[1248px]
        grid-cols-1 gap-4 px-3
        md:grid-cols-[64px_minmax(0,1fr)]
        lg:grid-cols-[200px_minmax(0,1fr)_280px]
        lg:gap-6
        xl:grid-cols-[220px_minmax(0,680px)_300px]
        xl:gap-8
        xl:px-0
      "
    >
      {children}
    </div>
  );
}