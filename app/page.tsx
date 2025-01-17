
import Image from "next/image";
import LatestPosts from "./components/home/latest-posts";
import PopularPosts from "./components/home/popular-posts";
import TopCatogories from "./components/home/top-categories";
import Container from "./components/ui/Container";
import { MainNav } from "./components/ui/main-nav";
import Link from "next/link";


export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col h-full justify-center md:justify-evenly mt-16 md:flex-row">
        <div>
          <LatestPosts />
        </div>

        <div className=" md:ml-5 flex flex-col  md:h-[280vh]">
          
            <div className="md:sticky w-full top-10 bottom-0">
              <div className="flex flex-col w-full">
                <h1 className="font-bold mb-4">인기 카테고리</h1>
                <TopCatogories />
              </div>


               <div className="flex flex-col w-full"><h1 className="mt-10  font-bold mb-4">인기 포스트</h1>

               <PopularPosts /></div>

              <Link href="https://www.coupang.com" target="_blank">
                  <div className="mt-10 w-full h-fit bg-blue-600 dark:bg-transparent">
                      <Image src="/coupang-round.png" alt="쿠팡" width={500} height={500} className="w-full h-40 object-scale-down" />
                  </div>
              </Link>

            </div>
        </div>
      </main>
    </Container>
  );
}
  