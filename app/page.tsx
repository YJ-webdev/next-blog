
import LatestPosts from "./components/home/latest-posts";
import PopularPosts from "./components/home/popular-posts";
import TopCatogories from "./components/home/top-categories";
import Container from "./components/ui/Container";
import { MainNav } from "./components/ui/main-nav";


export default function Home() {
  return (
    <Container>
    <MainNav />
    <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row"><div>
    <LatestPosts /></div><div className="h-screen">
          <div>
            <h1 className="font-bold mb-4">인기 카테고리</h1>
            <TopCatogories />
          </div>
          <div className="mt-10 sticky top-0">
            <h1 className="font-bold mb-4">인기 포스트</h1>
            <PopularPosts />
          </div>
        </div></main>
    
    </Container>
  );
}
