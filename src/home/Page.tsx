
// Home.jsx
import React, { useEffect, useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "../components/shadcn/ui/resizable";
import NavBar from "@/components/app/NavBar";
import { WavyBackground } from "@/components/custom/wavy-background";
import RandomDikr from "@/components/app/RandomDikr";
import Cards from "@/components/app/Cards";

const Home = ({ change }) => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
      <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={20}>
      <NavBar />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={80}>
      <RandomDikr />
      <Cards />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Home;