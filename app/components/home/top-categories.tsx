

import { POSTS } from "@/app/lib/contants";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function TopCatogories() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
      {POSTS.map((post) => (
        <Button
          key={post.title}
          variant={"secondary"}
          className="hover:scale-110 transition-all"
          asChild
        >
          <Link href={post.href}>{post.title}</Link>
        </Button>
      ))}
    </div>
  );
}