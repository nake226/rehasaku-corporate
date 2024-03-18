import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageTitle } from "@/components/common/PageTitle";
import { ChildPage } from "@/components/templates/ChildPage";
import { ABOUT_CONTENTS } from "@/lib/const";

export default function AboutPage() {
  return (
    <ChildPage>
      <PageTitle
        title="ABOUT"
        subTitle="会社概要"
        triangleIconSummitPosition="tr"
      />
      <Breadcrumb pages={[{ label: "会社概要", url: "/about" }]} />
      <div className="md:w-[800px] md:mx-auto py-20 sm:py-16 sm:px-8">
        <ul>
          {ABOUT_CONTENTS.map((content) => (
            <li
              key={content.id}
              className="flex py-4 border-b border-lightGray text-paragraph leading-paragraph sm:text-small sm:leading-small"
            >
              <span className="w-1/3 text-aboutGray ">{content.label}</span>
              <span className="w-2/3 whitespace-pre-line">{content.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <iframe
        className="w-full h-[520px] sm:h-[200px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.009627159447!2d139.73945477644645!3d35.62748917260472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b317f42a4ff%3A0x615d042f6b8fe931!2sSPROUND!5e0!3m2!1sja!2sjp!4v1710471554945!5m2!1sja!2sjp"
        loading="lazy"
      ></iframe>
    </ChildPage>
  );
}
