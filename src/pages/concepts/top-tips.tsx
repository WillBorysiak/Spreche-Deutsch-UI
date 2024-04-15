import type { NextPage } from "next";

import SubHeading from "../../components/generic/typography/heading/SubHeading";

const TopTips: NextPage = () => {
  return (
    <section id="top-tips-page" className="flex flex-col items-center">
      <div className="mt-10">
        <SubHeading text="Coming Soon..." />
      </div>
    </section>
  );
};

export default TopTips;
