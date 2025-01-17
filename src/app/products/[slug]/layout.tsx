import Footer from "@/components/footer";
import Header from "@/components/header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="pb-[110px]"><Header/></div>
      {children}
      <Footer/>
    </>
  );
}
