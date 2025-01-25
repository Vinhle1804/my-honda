import Footer from "@/components/footer";
import Header from "@/components/header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header/>
      <div className="pt-[110px]">{children}</div>
      <Footer/>
    </>
  );
}
