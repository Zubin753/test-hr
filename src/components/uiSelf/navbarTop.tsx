import React from 'react';
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";

const NavbarTop = () => {
  return (
    <Tabs defaultValue="info">
      <TabsList className={"w-full bg-white"}>
        <TabsTrigger className={"w-full h-full py-5"} value="home">Home</TabsTrigger>
        <TabsTrigger className={"w-full h-full py-5"} value="info">My Info</TabsTrigger>
        <TabsTrigger className={"w-full h-full py-5"} value="people">People</TabsTrigger>
        <TabsTrigger className={"w-full h-full py-5"} value="hiring">Hiring</TabsTrigger>
        <TabsTrigger className={"w-full h-full py-5"} value="reports">Reports</TabsTrigger>
        <TabsTrigger className={"w-full h-full py-5"} value="files">Files</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default NavbarTop;