"use client";

import Image from "next/image";
import { HEADER_CONTENTS } from "@/lib/const";
import { HeaderLink } from "@/components/common/HeaderLink";
import { ContactButton } from "@/components/common/ContactButton";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isHeaderShown, setIsHeaderShown] = useState(false);

  const handleBodyFixedStatus = () => {
    const body = document.getElementsByTagName("body")[0];
    if (isHeaderShown) {
      setIsHeaderShown(false);
      body.style.height = "auto";
      body.style.overflow = "visible";
    } else {
      setIsHeaderShown(true);
      body.style.height = "100vh";
      body.style.overflow = "hidden";
    }
  };

  return (
    <header className="md:hidden">
      <div className="flex items-center justify-between px-6 h-[57px]">
        <Link href="/">
          <Image
            priority={true}
            src="/images/common/logo.svg"
            width={122}
            height={24}
            alt="先進性で、リハビリに変革を。"
          />
        </Link>
        <input
          type="checkbox"
          name="header"
          id="header"
          className="hidden peer"
          onClick={() => {
            handleBodyFixedStatus();
          }}
        />
        <label
          htmlFor="header"
          className="border-y-2 border-blue w-10 h-4 block peer-checked:border-0 peer-checked:bg-blue peer-checked:h-[2px]"
        />
        <label
          htmlFor="header"
          className="hidden peer-checked:block absolute top-[57px] left-0 w-full h-[calc(100vh_-_57px)] bg-white z-10"
        >
          <div className="flex flex-col">
            <ul className="flex flex-col border-t border-offWhite">
              {HEADER_CONTENTS.map((content) => {
                const label = content.label;
                return (
                  <li
                    key={content.id}
                    className="py-4 px-6 [&:nth-child(n+2)]:border-t border-lightGray"
                  >
                    {label === "事業紹介" ? (
                      <HeaderLink label={content.label} url={content.url} />
                    ) : (
                      <HeaderLink label={content.label} url={content.url} />
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="grid place-items-center">
              <ContactButton />
            </div>
          </div>
        </label>
      </div>
    </header>
  );
};
