import { NextPage } from "next/types";

import SubHeading from "../../components/generic/typography/heading/SubHeading";

const Books: NextPage = () => {
  return (
    <section id="books-page" className="flex flex-col items-center">
      <div className="mt-10">
        <SubHeading text="Coming Soon..." />
      </div>
    </section>
  );
};

export default Books;
