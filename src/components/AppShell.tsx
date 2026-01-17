import Sidebar from "./Sidebar";
import TopBar from "./TopNav";
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
    // Lock app to viewport; only the content column will scroll
    <div className="h-screen overflow-hidden bg-bg text-text">
      <div className="w-full h-full px-6 pb-6 overflow-hidden">
        <div className="grid h-full grid-cols-[240px_minmax(0,1fr)] gap-6 items-start">
          {/* Sidebar stays visible */}
          <div className="sticky top-0 h-screen self-start">
            <Sidebar />
          </div>

          {/* Right column (cancel outer right padding so edge is flush) */}
          <div className="min-w-0 h-full flex flex-col min-h-0 -mr-6">
            {/* TopNav stays visible (REMOVE pr-6 to remove the top gap) */}
            <div className="sticky top-0 z-50 shrink-0">
              <TopBar title={title} subtitle={subtitle} />
            </div>

            {/* Single scroll area (keep pr-6 so content stays aligned) */}
            <div className="flex-1 min-h-0 overflow-y-auto pt-6 pr-6">
              {/* This inner flex makes footer stick to bottom when content is short */}
              <div className="min-h-full flex flex-col">
                <main className="flex-1 min-w-0 space-y-6">{children}</main>

                {/* Footer pushed to bottom for short pages */}
                <div className="mt-auto pt-6">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
