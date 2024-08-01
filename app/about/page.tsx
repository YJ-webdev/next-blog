

import { Metadata } from "next";
import Container from "../components/ui/Container";
import { MainNav } from "../components/ui/main-nav";
import Header from "../components/ui/Heaeder";


export const metadata: Metadata = {
  title: "블로그 소개",
  description: "지식 만화경를 위한 추천 아이템 리뷰 정보 제공을 위한 사이트입니다.",
};

export default async function AboutPage() {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <MainNav />
          <Header>
            <h1 className="title font-semibold text-2xl tracking-wide mt-4 capitalize">
              블로그 소개
            </h1>
          </Header>
        </Container>
      </div>
      <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="min-w-48 max-w-48 flex flex-col gap-2 py-4">
            <p className="text-muted-foreground text-lg font-semibold text-center break-words">
            지식 만화경
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed text-base py-4">
          호기심이 만나는 곳, 지식 만화경에서 새로운 지식의 세계로 떠나보세요. 우리는 배움이 모험이 되어야 한다고 믿으며, 그 여정을 흥미롭고도 유익하게 만들기 위해 여기 있습니다. 트리비아 애호가든, 평생 학습자든, 아니면 단순히 새로운 지식에 대한 목마름이 있든, 우리의 블로그는 다양한 주제에 대한 통찰력을 제공합니다.

역사적 인물의 흥미로운 이야기부터 최신 과학의 혁신까지, 우주의 신비부터 일상 생활의 세세한 부분까지, 저희는 모든 것을 다룹니다. 우리의 목표는 잘 연구된, 흥미로운 콘텐츠를 통해 상상력을 자극하고 지식에 대한 갈증을 해소하는 것입니다.

매일 새로운 블로그 포스트와 함께 세상의 경이로움을 탐험해 보세요. 지식 만화경과 함께 호기심을 유지하고, 정보를 얻으며, 무엇보다도 영감을 받아 보세요.
          </p>
        </div>
      </div>
    </>
  );
}