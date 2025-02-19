import { FullStack } from "@/components/fullstack/fullstack";
import { Header } from "@/components/header";
import { Wordpress } from "@/components/wordpress/wordpress";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-black to-neutral-800 min-h-screen min-w-full py-16 text-neutral-300">
      <Header />
      <FullStack />
      {/* <Wordpress /> */}
    </div>
  );
}
