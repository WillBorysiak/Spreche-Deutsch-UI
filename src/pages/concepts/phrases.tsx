import type { NextPage } from "next";

import SubHeading from "../../components/generic/typography/heading/SubHeading";

const Phrases: NextPage = () => {
  return (
    <section id="phrases-page" className="flex justify-center">
      <div className="mt-10 flex flex-col">
        <SubHeading text="Coming Soon..." />
      </div>
    </section>
  );
};

export default Phrases;
