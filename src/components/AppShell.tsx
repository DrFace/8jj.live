import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Footer from "./Footer";

export default function AppShell({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="min-h-screen bg-app">
      {/* Use full screen width; no tight max-width to avoid fractional rounding */}
      <div className="w-full px-6 py-6 overflow-x-hidden">
        <div className="grid grid-cols-[280px_minmax(0,1fr)] gap-6 items-start">
          <div className="sticky top-6 h-[calc(100vh-48px)]">
            <Sidebar />
          </div>

          <div className="min-w-0 space-y-6">
            <TopBar title={title} subtitle={subtitle} />
            <main className="min-w-0 space-y-6">{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
