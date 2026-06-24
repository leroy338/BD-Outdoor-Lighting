import { Topbar } from "@/components/marketing/topbar";
import { Footer } from "@/components/marketing/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Topbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}
