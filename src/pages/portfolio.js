import { MenuButton }  from '@/components';
import { Header } from "@/components";
import { HomeHero } from "@/Layout";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="w-auto">
        <Header/>
        <div className='bg-white'>
          <HomeHero/>
        </div>
      </main>

    </div>
  );
}
