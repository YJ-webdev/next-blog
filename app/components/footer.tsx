"use client";


import Link from "next/link";

import { useFormState } from "react-dom";
import { Icons } from "./ui/icons";
import { POSTS } from "../lib/contants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createSubscriber } from "../lib/actions";

export default function Footer() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createSubscriber, initialState);
  
  return (
    <footer className="bg-gray-100 py-8 px-5 dark:bg-gray-800 mt-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icons.logo className="h-6 w-6" />
              <span className="text-md font-semibold">지식 만화경</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              최근 뉴스 및 소식 등 여러 기사를 통해 최신 소식을 확인해보세요.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/w3tsadev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Icons.twitter className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
              <a
                href="https://github.com/w3tsadev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <Icons.gitHub className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">블로그</h3>
            <ul className="space-y-2 text-sm">
              {POSTS.map((post) => (
                <li key={post.title}>
                  <Link
                    href={post.href}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">링크</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:w3tsadev@gmail.com"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  문의
                </a>
              </li>
              <li>
                <Link
                  href="/terms-of-services"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  서비스 약관
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  개인 정보 정책
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  사이트맵
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-md font-semibold">뉴스 레터</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              뉴스 레터를 구독하여 최신 뉴스와 업데이트를 확인해보세요.
            </p>
            <form action={dispatch}>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="이메일 입력"
                  className="flex-1"
                  defaultValue=""
                  aria-describedby="email-error"
                />
                <Button>구독</Button>
              </div>
              <div
                id="email-error"
                aria-label="polite"
                aria-atomic="true"
                className="px-1"
              >
                {state?.errors?.email &&
                  state.errors.email.map((error: string) => (
                    <p key={error} className="text-xs text-red-500">
                      {error}
                    </p>
                  ))}
                {!state?.errors?.email && (
                  <p className="text-xs text-green-500">{state?.message}</p>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
          &copy; 2024 지식 만화경. All rights reserved.
        </div>
      </div>
    </footer>
  );
}