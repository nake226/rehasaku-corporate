import { PageTitle } from "@/components/common/PageTitle";
import { Members } from "@/components/pages/recruit/Members";
import { Values } from "@/components/pages/recruit/Values";
import { ChildPage } from "@/components/templates/ChildPage";

export default function RecruitPage() {
  return (
    <ChildPage>
      <PageTitle
        title="RECRUIT"
        subTitle="採用情報"
        triangleIconSummitPosition="bl"
      />
      <Values />
      <Members />
    </ChildPage>
  );
}
