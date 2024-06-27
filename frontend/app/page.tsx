import BodyPage from "@/components/body/body";
import HeaderPage from "@/components/header/header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeaderPage />
      <BodyPage/>
    </main>
  );
}
