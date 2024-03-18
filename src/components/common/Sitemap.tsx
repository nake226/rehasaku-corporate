import { SERVICE_CONTENTS, SITE_CONTENTS } from "@/lib/const";
import Link from "next/link";

export const Sitemap = () => {
  return (
    <div className="flex justify-center pt-16 px-[140px] pb-12 gap-x-32 mx-auto sm:flex-col sm:pt-20 sm:px-8 sm:pb-24 sm:gap-y-8">
      <div>
        <p className="border-b border-primary pb-2 font-bold">
          リハサクについて
        </p>
        <ul className="pt-6 flex flex-col gap-y-4">
          {SITE_CONTENTS.map((content) => {
            const isOuterLink = content.url.includes("https");
            const linkProps = isOuterLink
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <li key={content.id}>
                <Link
                  className="text-[18px] leading-[27px]"
                  href={content.url}
                  {...linkProps}
                >
                  {content.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p className="border-b border-primary pb-2 font-bold">
          サービスのご案内
        </p>
        <ul className="flex flex-col text-[18px]">
          {SERVICE_CONTENTS.map((content) => (
            <li key={content.id} className="mt-6">
              <p>{content.title}</p>
              <ul className="flex flex-col">
                {content.contents.map((content) => (
                  <li
                    key={content.id}
                    className="pl-4 relative mt-4 before:content-sitemap before:absolute before:left-0"
                  >
                    <Link
                      className="leading-[27px] whitespace-pre-line"
                      href={content.url}
                    >
                      {content.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
