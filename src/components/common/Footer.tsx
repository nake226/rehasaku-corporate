import { FOOTER_CONTENTS } from "@/lib/const";
import Image from "next/image";
import { FooterLink } from "./FooterLink";

export const Footer = () => {
  return (
    <footer className="border-t border-blue text-[#00293F]">
      <div className="md:flex md:items-start md:justify-between md:px-8 h-48 pt-10 sm:pt-8">
        <Image
          className="sm:m-auto"
          priority={true}
          src="/images/common/logo.svg"
          width={200}
          height={40}
          alt="先進性で、リハビリに変革を。"
        />
        <div className="sm:mt-8">
          <ul className="flex items-center justify-between sm:justify-center gap-x-4">
            {FOOTER_CONTENTS.map((content) => (
              <li key={content.id}>
                <FooterLink label={content.label} url={content.url} />
              </li>
            ))}
          </ul>
          <p className="text-[10px] mt-4 sm:mt-1 text-right sm:text-center">
            © 株式会社リハサク All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
