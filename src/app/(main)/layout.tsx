import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/** Layout des pages internes : header classique + footer. */
export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
