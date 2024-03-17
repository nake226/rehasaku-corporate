import { PageTitle } from "@/components/common/PageTitle";
import { Company } from "@/components/pages/recruit/Company";
import { Members } from "@/components/pages/recruit/Members";
import { Office } from "@/components/pages/recruit/Office";
import { Values } from "@/components/pages/recruit/Values";
import { Recruit } from "@/components/pages/recruit/Recruit";
import { ChildPage } from "@/components/templates/ChildPage";

export default function RecruitPage() {
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
      <Company />
      <Recruit />
    </ChildPage>
  );
}
