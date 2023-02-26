import React from "react";
import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MiniSize from "@/components/MiniSize";
import BestSeller from "@/components/BestSeller";
import Magazine from "@/components/Magazine";
import Blogs from "@/components/Blogs";
function Index() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner />
        <Brand />
        <MiniSize />
        <BestSeller />
        <Magazine />
        <Blogs />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Index;
