
import { getTermsOfServices } from "../blog/utils";

import { Metadata } from "next";
import Container from "../components/ui/Container";
import { MainNav } from "../components/ui/main-nav";
import { CustomMDX } from "../components/ui/mdx";

export const metadata: Metadata = {
  title: "Terms Of Services",
  description: "This page explains the terms of use of the site.",
};

export default function Page() {
  let post = getTermsOfServices().find(
    (post) => post.slug === "terms-of-services"
  );

  return (
    <Container>
      <MainNav />
      <article className="prose">
        <CustomMDX source={post?.content} />
      </article>
    </Container>
  );
}