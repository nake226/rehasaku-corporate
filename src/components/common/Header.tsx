"use client";

import Image from "next/image";
import { HEADER_CONTENTS } from "@/lib/const";
import { HeaderLink } from "./HeaderLink";
import { ContactButton } from "./ContactButton";
import Link from "next/link";
import { useState } from "react";

type Props = {
  isChildPage?: boolean;
};

export const Header = ({ isChildPage = true }: Props) => {
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

  const headerStyle = isChildPage ? "bg-white" : "absolute top-0 w-full";

  return (
    <div>
      <header className={`${headerStyle} sm:hidden`}>
        <div className="flex items-center justify-between px-8 h-20">
          <Link href="/">
            <Image
              priority={true}
              src="/images/common/logo.svg"
              width={175}
              height={35}
              alt="先進性で、リハビリに変革を。"
            />
          </Link>
          <div className="flex items-center">
            <ul className="flex items-center justify-between mr-6">
              {HEADER_CONTENTS.map((content) => {
                const isOuterLink = content.url.includes("https");
                return (
                  <li key={content.id} className="[&:nth-child(n+2)]:ml-4">
                    <HeaderLink
                      label={content.label}
                      url={content.url}
                      isOuterLink={isOuterLink}
                    />
                  </li>
                );
              })}
            </ul>
            <ContactButton />
          </div>
        </div>
      </header>
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
                        <HeaderLink
                          label={content.label}
                          url={content.url}
                          onClick={() => {
                            handleBodyFixedStatus();
                          }}
                        />
                      ) : (
                        <HeaderLink
                          label={content.label}
                          url={content.url}
                          onClick={() => {
                            handleBodyFixedStatus();
                          }}
                        />
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
    </div>
  );
};
