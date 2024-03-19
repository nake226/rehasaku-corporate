import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ChildPage } from "@/components/templates/ChildPage";
import { formatNewsDate } from "@/lib/date";
import { getNewsDetail, getNewsList } from "@/lib/microcms";
import Image from "next/image";

export async function generateStaticParams() {
  const { contents } = await getNewsList();

  const paths = contents.map((news) => {
    return {
      id: news.id,
    };
  });

  return [...paths];
}

export default async function NewsDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const news = await getNewsDetail(id);

  return (
    <ChildPage>
      <div className="sm:hidden">
        <Breadcrumb
          pages={[
            { label: "お知らせ", url: "/news" },
            { label: news.title, url: `/news/${id}` },
          ]}
        />
      </div>
      <div className="md:w-[900px] md:mx-auto py-20 sm:pt-6 sm:pb-20 sm:px-5">
        <div className="flex items-center gap-x-4">
          <span className="font-jost text-caption leading-caption">NEWS</span>
          <span className="font-jost text-aboutGray text-caption leading-caption">
            {formatNewsDate(news.createdAt)}
          </span>
          <ul className="flex gap-x-2">
            {news.categories.map((category) => (
              <li
                key={category}
                className="border border-blue rounded-2xl px-3 text-blue text-[13px]"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <h1 className="mt-2 sm:mt-6 text-h3 leading-h3 sm:text-sub sm:leading-sub font-bold">
          {news.title}
        </h1>
        <p className="mt-14 sm:mt-6 text-[#555555] font-bold">{news.summary}</p>
        <div className="mt-20 sm:mt-6">
          <Image
            className="w-full max-w-[640px] h-auto mx-auto"
            priority={true}
            src={news.thumbnail.url}
            width={680}
            height={380}
            alt="先進性で、リハビリに変革を。"
          />
        </div>
        <div
          className="news-body"
          dangerouslySetInnerHTML={{ __html: news.body }}
        ></div>
      </div>
    </ChildPage>
  );
}
