import Image from "next/image";
import { HEADER_CONTENTS } from "@/lib/const";
import { HeaderLink } from "@/components/common/HeaderLink";
import { ContactButton } from "@/components/common/ContactButton";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  return (
    <header className="absolute top-0 w-full sm:hidden">
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
            {HEADER_CONTENTS.map((content) => (
              <li key={content.id} className="[&:nth-child(n+2)]:ml-4">
                <HeaderLink label={content.label} url={content.url} />
              </li>
            ))}
          </ul>
          <ContactButton />
        </div>
      </div>
    </header>
  );
};
