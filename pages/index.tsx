import React from "react";
import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import MiniSize from "@/components/MiniSize";
import BestSeller from "@/components/BestSeller";
import Magazine from "@/components/Magazine";
import Blogs from "@/components/Blogs";

function Index() {
  return (
    <main>
      <Banner />
      <Brand />
      <MiniSize />
      <BestSeller />
      <Magazine />
      <Blogs />
    </main>
  );
}

export default Index;
