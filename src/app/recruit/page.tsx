import { PageTitle } from "@/components/common/PageTitle";
import { Company } from "@/components/pages/recruit/Company";
import { Members } from "@/components/pages/recruit/Members";
import { Office } from "@/components/pages/recruit/Office";
import { Values } from "@/components/pages/recruit/Values";
import { Recruit } from "@/components/pages/recruit/Recruit";
import { ChildPage } from "@/components/templates/ChildPage";
import DemoSlider from "@/components/common/DemoSlider";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export default function RecruitPage() {
  const dataSlider = [
    {
      id: 1,
      image: "/images/recruit/office01.jpg",
    },
    {
      id: 2,
      image: "/images/recruit/office02.jpg",
    },
    {
      id: 3,
      image: "/images/recruit/office03.jpg",
    },
    {
      id: 4,
      image: "/images/recruit/office04.jpg",
    },
    {
      id: 5,
      image: "/images/recruit/office05.jpg",
    },
  ];
  return (
    <ChildPage isRecruitPage={true}>
      <PageTitle
        title="RECRUIT"
        subTitle="採用情報"
        triangleIconSummitPosition="bl"
      />
      <Breadcrumb pages={[{ label: "採用情報", url: "/recruit" }]} />
      <Values />
      <Members />
      <Office />
      <DemoSlider data={dataSlider} />
      <Company />
      <Recruit />
    </ChildPage>
  );
}
