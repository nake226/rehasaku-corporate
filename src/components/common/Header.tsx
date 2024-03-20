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
          <div className="hidden peer-checked:block absolute top-[57px] left-0 w-full h-[calc(100vh_-_57px)] bg-white z-10">
            <div className="flex flex-col">
              <ul className="flex flex-col border-t border-offWhite">
                {HEADER_CONTENTS.map((content) => {
                  const label = content.label;
                  return (
                    <li
                      key={content.id}
                      className={`py-4 px-6 ${
                        label === "事業紹介" && "py-0 px-0"
                      } [&:nth-child(n+2)]:border-t border-lightGray`}
                    >
                      {label === "事業紹介" ? (
                        <>
                          <input
                            type="checkbox"
                            name="service"
                            id="service"
                            className="hidden peer/service"
                          />
                          <label htmlFor="service">
                            <p className="px-6 py-4 text-paragraph leading-paragraph font-bold">
                              事業紹介
                            </p>
                          </label>
                          <span className="absolute top-7 right-6 w-3 h-3 border-b-2 border-r-2 border-[#999999] pointer-events-none rotate-45 peer-checked/service:top-8 peer-checked/service:border-b-0 peer-checked/service:border-t-2 peer-checked/service:-rotate-45" />
                          <div className="hidden peer-checked/service:block">
                            <ul>
                              <li className="relative py-4 border-t border-lightGray">
                                <input
                                  type="checkbox"
                                  name="service-medical"
                                  id="service-medical"
                                  className="hidden peer/service-medical"
                                />
                                <label htmlFor="service-medical">
                                  <p className="pl-6 text-paragraph leading-paragraph">
                                    医療機関向け REHASAKU Medical
                                  </p>
                                </label>
                                <span className="absolute top-7 right-6 w-2 h-2 border-b-2 border-r-2 border-[#999999] pointer-events-none rotate-45 peer-checked/service-medical:top-8 peer-checked/service-medical:border-b-0 peer-checked/service-medical:border-t-2 peer-checked/service-medical:-rotate-45" />
                                <div className="hidden peer-checked/service-medical:block pl-6">
                                  <p className="text-small leading-small">
                                    <Link
                                      href="/service"
                                      className="block pt-4"
                                      onClick={() => {
                                        handleBodyFixedStatus();
                                      }}
                                    >
                                      運動療法クラウドシステム
                                    </Link>
                                  </p>
                                </div>
                              </li>
                              <li className="relative py-4 border-t border-lightGray">
                                <input
                                  type="checkbox"
                                  name="service-posture"
                                  id="service-posture"
                                  className="hidden peer/service-posture"
                                />
                                <label htmlFor="service-posture">
                                  <p className="pl-6 text-paragraph leading-paragraph">
                                    治療院向け REHASAKU
                                  </p>
                                </label>
                                <span className="absolute top-7 right-6 w-2 h-2 border-b-2 border-r-2 border-[#999999] pointer-events-none rotate-45 peer-checked/service-posture:top-8 peer-checked/service-posture:border-b-0 peer-checked/service-posture:border-t-2 peer-checked/service-posture:-rotate-45" />
                                <div className="hidden peer-checked/service-posture:block pl-6 ">
                                  <p className="text-small leading-small">
                                    <Link
                                      href="/service"
                                      className="block pt-4"
                                      onClick={() => {
                                        handleBodyFixedStatus();
                                      }}
                                    >
                                      運動指導支援ツール
                                    </Link>
                                  </p>
                                  <p className="text-small leading-small">
                                    <Link
                                      href="/service/posture"
                                      className="block pt-4"
                                      onClick={() => {
                                        handleBodyFixedStatus();
                                      }}
                                    >
                                      AI姿勢分析
                                    </Link>
                                  </p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <HeaderLink
                          label={content.label}
                          url={content.url}
                          onClick={handleBodyFixedStatus}
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
          </div>
        </div>
      </header>
    </div>
  );
};
