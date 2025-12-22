"use client"

import { usePathname } from 'next/navigation';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname === '/admin/login';

  if (hideLayout) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
