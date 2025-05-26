import Image from "next/image";
import MainContent from "@/components/MainContent";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#111418] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <MainContent />
        <Menu />
      </div>
    </div>
  );
}
