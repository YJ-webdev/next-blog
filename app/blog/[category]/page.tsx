import { notFound } from "next/navigation";
import { getBlogPosts } from "../utils";
import Link from "next/link";
import CardCategory from "@/app/components/ui/CardCategory";

import Container from "@/app/components/ui/Container";
import Header from "@/app/components/ui/Heaeder";


export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    category: post.metadata.category,
  }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  let { category } = params;

  return {
    title: category.toLocaleUpperCase(),
    description: `All articles reagarding ${category}`,
  };
}

export default function Page({ params }: { params: { category: string } }) {
  let posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.category
  );

  if (!posts.length) {
    notFound();
  }
  return (
    <>
      <Header>
        <Container>
          <h1 className="title font-semibold text-2xl tracking-wider mt-4 uppercase">
            {posts[0]?.metadata.category === "food-drink" && "음식"}  {posts[0]?.metadata.category === "hobbies-activities" && "취미 및 활동"}{posts[0]?.metadata.category === "travel" && "여행"}{posts[0]?.metadata.category === "beauty" && "미용"}
            {posts[0]?.metadata.category === "wedding-party" && "웨딩 및 이벤트"}
            {posts[0]?.metadata.category === "health-wellness" && "건강 및 웰빙"}{posts[0]?.metadata.category === "vacation" && "여행"}{posts[0]?.metadata.category === "hot-items" && "유용한 아이템"}
          </h1>
        </Container>
      </Header>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                href={`/blog/${post.metadata.category}/${post.slug}`}
                key={post.slug}
              >
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  date={post.metadata.publishedAt}
                />
              </Link>
            ))}
        </div>
      </Container>
    </>
  );
}