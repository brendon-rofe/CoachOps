import type { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-white dark:bg-[#111a22] group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <main className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
