"use client";

// import { popularPosts } from "@/lib/placeholder-data";
import Link from "next/link";
import useSWR from "swr";

import { Icons } from "../ui/icons";
import SkeletonCard from "../skeleton/popular-posts-skeleton";
import { fetcher, fetchUrl } from "@/lib/utils";

export default function PopularPosts() {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <SkeletonCard />;

  const limitData = data?.slice(0, 5);

  return (
    <ul className="overflow-auto">
      {limitData?.map((post: { category: string; slug: string; title: string }) => (
        <Link href={`/blog/${post.category}/${post.slug}`} key={post.title}>
          <li className="flex items-center gap-2 group cursor-pointer py-2">
            <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}