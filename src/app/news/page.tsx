import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageTitle } from "@/components/common/PageTitle";
import { ChildPage } from "@/components/templates/ChildPage";
import { getNewsList } from "@/lib/microcms";
import Link from "next/link";
import { formatNewsDate } from "@/lib/date";

export default async function NewsPage() {
  const { contents } = await getNewsList();

  return (
    <ChildPage>
      <PageTitle
        title="NEWS"
        subTitle="お知らせ"
        triangleIconSummitPosition="tr"
      />
      <Breadcrumb pages={[{ label: "お知らせ", url: "/news" }]} />
      <div className="md:w-[900px] md:mx-auto py-20 sm:py-12 sm:px-8">
        <ul>
          {contents.map((news) => (
            <li
              key={news.id}
              className="grid gap-y-4 border-t [&:first-child]:sm:border-none border-blue pt-4 md:pb-10 sm:pb-8"
            >
              <p className="text-paragraph leading-[32px]">{news.title}</p>
              <p className="text-caption leading-caption text-blue underline">
                <Link href={`/news/${news.id}`}>詳しく見る</Link>
              </p>
              <div className="flex items-center gap-x-4">
                <span className="font-jost text-caption leading-caption">
                  NEWS
                </span>
                <span className="font-jost text-aboutGray text-caption leading-caption">
                  {formatNewsDate(news.createdAt)}
                </span>
                <p className="border border-blue rounded-2xl px-3 text-blue text-[13px]">
                  {news.categories}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ChildPage>
  );
}
