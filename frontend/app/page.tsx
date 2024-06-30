import BodyPage from "@/components/body/body";
import FooterPage from "@/components/footer/footer";
import HeaderPage from "@/components/header/header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeaderPage />
      <BodyPage/>
      <FooterPage/>
    </main>
  );
}
