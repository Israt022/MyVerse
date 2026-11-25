import FeedList from "@/component/feed/FeedList";
import MainLayout from "@/component/layout/MainLayout";
import MobileNavigation from "@/component/layout/MobileNavigation";
import Navbar from "@/component/layout/Navbar";
import RightSidebar from "@/component/layout/RightSidebar";
import Sidebar from "@/component/layout/Sidebar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <Navbar />

      <MainLayout>
        <Sidebar />

        <main className="min-w-0 pb-24 md:pb-8">
          <FeedList />
        </main>

        <RightSidebar />
      </MainLayout>

      <MobileNavigation />

    </div>
  );
}
