import About from "@/components/About";
import Background from "@/components/Background";
import Clients from "@/components/Clients";
import MainLayout from "@/components/layouts/MainLayout";
import React from "react";

function AboutMePage() {
  return (
    <MainLayout>
      <About />
      <Background />
      <Clients />
    </MainLayout>
  );
}

export default AboutMePage;
