import Facts from "@/components/Facts";
import MainLayout from "@/components/layouts/MainLayout";
import MobileApps from "@/components/MobileApps";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import React from "react";

function SkillsPage() {
  return (
    <MainLayout>
      <div className="p-5 mx-auto my-5 max-w-7xl">
        <Facts />
        <Skills />
        <Portfolio />
      </div>
    </MainLayout>
  );
}

export default SkillsPage;
