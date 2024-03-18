import Link from "next/link";

type Props = {
  pages: Array<{ label: string; url: string }>;
};

export const Breadcrumb = ({ pages }: Props) => {
  return (
    <ul className="flex py-4 px-6 text-[15px] leading-[15px] text-blue">
      <li>
        <Link href="/">TOP</Link>
      </li>
      {pages.map((page) => (
        <li
          key={page.label}
          className="relative ml-8 before:absolute before:top-1 before:-left-6 before:-rotate-45 before:border-black before:border-r-2 before:border-b-2 before:w-[10px] before:h-[10px]"
        >
          <Link href={page.url}>{page.label}</Link>
        </li>
      ))}
    </ul>
  );
};
