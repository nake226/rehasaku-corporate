import { PageTitle } from "@/components/common/PageTitle";
import { Company } from "@/components/pages/recruit/Company";
import { Members } from "@/components/pages/recruit/Members";
import { Office } from "@/components/pages/recruit/Office";
import { Values } from "@/components/pages/recruit/Values";
import { Recruit } from "@/components/pages/recruit/Recruit";
import { ChildPage } from "@/components/templates/ChildPage";
import DemoSlider from "@/components/common/DemoSlider";

export default function RecruitPage() {
  const dataSlider = [
    {
      id: 1,
      title: "ARE AWESOME",
      tagline: "NEXTJS 13 & SWIPER SLIDER",
      image: "/images/recruit/office01.jpg",
      buttons: [
        {
          id: 1,
          text: "Roberto Nickson",
          link: "https://www.pexels.com/@rpnickson/",
          type: "btn-dark btn-circle",
        },
      ],
    },
    {
      id: 1,
      title: "ARE AWESOME",
      tagline: "NEXTJS 13 & SWIPER SLIDER",
      image: "/images/recruit/office02.jpg",
      buttons: [
        {
          id: 1,
          text: "Roberto Nickson",
          link: "https://www.pexels.com/@rpnickson/",
          type: "btn-dark btn-circle",
        },
      ],
    },
    {
      id: 1,
      title: "ARE AWESOME",
      tagline: "NEXTJS 13 & SWIPER SLIDER",
      image: "/images/recruit/office03.jpg",
      buttons: [
        {
          id: 1,
          text: "Roberto Nickson",
          link: "https://www.pexels.com/@rpnickson/",
          type: "btn-dark btn-circle",
        },
      ],
    },
    {
      id: 1,
      title: "ARE AWESOME",
      tagline: "NEXTJS 13 & SWIPER SLIDER",
      image: "/images/recruit/office04.jpg",
      buttons: [
        {
          id: 1,
          text: "Roberto Nickson",
          link: "https://www.pexels.com/@rpnickson/",
          type: "btn-dark btn-circle",
        },
      ],
    },
    {
      id: 1,
      title: "ARE AWESOME",
      tagline: "NEXTJS 13 & SWIPER SLIDER",
      image: "/images/recruit/office05.jpg",
      buttons: [
        {
          id: 1,
          text: "Roberto Nickson",
          link: "https://www.pexels.com/@rpnickson/",
          type: "btn-dark btn-circle",
        },
      ],
    },
  ];
  return (
    <ChildPage isRecruitPage={true}>
      <PageTitle
        title="RECRUIT"
        subTitle="採用情報"
        triangleIconSummitPosition="bl"
      />
      <Values />
      <Members />
      <Office />
      <DemoSlider data={dataSlider} />
      <Company />
      <Recruit />
    </ChildPage>
  );
}
