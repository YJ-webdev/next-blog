import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbWithCustomSeparator({
  category,
  slug,
}: {
  category: string;
  slug: string;
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">홈</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href={`/blog/${category}`}> 
          
          {category === "hobbies-activities" && "취미 활동"} {category === "wedding-party" && "웨딩 및 이벤트"} {category === "health-wellness" && "건강 및 웰빙"} {category === "vacation" && "여행"} {category === "food-drink" && "음식 및 음료"} {category === "hot-items" && "인기 아이템"}
          
          
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{slug}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}