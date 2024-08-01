

import { Metadata } from "next";
import Container from "../components/ui/Container";
import { MainNav } from "../components/ui/main-nav";
import Header from "../components/ui/Heaeder";


export const metadata: Metadata = {
  title: "블로그 소개",
  description: "현명한 소비를 위한 추천 아이템 리뷰 정보 제공을 위한 사이트입니다.",
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
          <div className="min-w-48 max-w-48 flex flex-col gap-2">
            <p className="text-muted-foreground text-center break-words">
              아이템 리뷰 정보
            </p>
          </div>
          <p className="text-muted-foreground text-lg py-4">
          소비를 앞두고 고민하시는 분들을 위해 여러가지 아이템들에 대한 리뷰를 제공합니다.
소비에 있어서 고려되는 제품의 브랜드 이미지, 품질, 가격, 서비스, 리뷰, A/S 등 아이템의 선택에 따라 필요한 정보를 제공합니다. 최신 업데이트 된 리뷰만을 포함하고 있으며, 모든 자료들은 허위나 왜곡 없이 개인적인 의견을 반영하여 작성 될 수 있음을 알려드립니다. 
          </p>
        </div>
      </div>
    </>
  );
}