import { PageTitle } from "@/components/common/PageTitle";
import { Mission } from "@/components/organisms/Mission";
import { Vision } from "@/components/pages/ philosophy/Vision";
import { Message } from "@/components/pages/ philosophy/Message";
import { ChildPage } from "@/components/templates/ChildPage";
import { Breadcrumb } from "@/components/common/Breadcrumb";

export default function PhilosophyPage() {
  return (
    <ChildPage>
      <PageTitle
        title="PHILOSOPHY"
        subTitle="企業理念"
        triangleIconSummitPosition="br"
      />
      <Breadcrumb pages={[{ label: "企業理念", url: "/philosophy" }]} />
      <Vision />
      <Mission />
      <Message />
    </ChildPage>
  );
}
