import React from 'react';
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";

const NavbarTop = () => {
  return (
    <Tabs defaultValue="info">
      <TabsList className={"w-full bg-white"}>
        <TabsTrigger className={"w-full  h-[54px]"} value="home">Home</TabsTrigger>
        <TabsTrigger className={"w-full h-[54px]"} value="info">My Info</TabsTrigger>
        <TabsTrigger className={"w-full  h-[54px]"} value="people">People</TabsTrigger>
        <TabsTrigger className={"w-full  h-[54px]"} value="hiring">Hiring</TabsTrigger>
        <TabsTrigger className={"w-full  h-[54px]"} value="reports">Reports</TabsTrigger>
        <TabsTrigger className={"w-full  h-[54px]"} value="files">Files</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default NavbarTop;