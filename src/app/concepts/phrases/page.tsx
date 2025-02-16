import type { NextPage } from "next";

import SubHeading from "../../../components/generic/typography/heading/SubHeading";

const PhrasesPage: NextPage = () => {
  return (
    <section id="phrases-page" className="flex justify-center">
      <div className="mt-10 flex flex-col">
        <SubHeading heading="Coming Soon..." />
      </div>
    </section>
  );
};

export default PhrasesPage;
