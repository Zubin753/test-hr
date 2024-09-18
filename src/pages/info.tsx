import React, {useEffect} from 'react';
import useUserStore from '@/store/store';
import {GoDotFill} from "react-icons/go";
import {TbPigMoney} from "react-icons/tb";
import {LuCross} from "react-icons/lu";
import {IoIosArrowRoundDown} from "react-icons/io";
import {MdLogout} from "react-icons/md";
import {Separator} from "@/components/ui/separator"
import {IoMenu} from "react-icons/io5";
import {SlOptionsVertical} from "react-icons/sl";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {cn} from "@/lib/utils"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {Avatar, AvatarImage, AvatarFallback} from "@/components/ui/avatar";
import {
  Bell,
  CircleHelp,
  Facebook,
  Mail,
  Phone,
  Settings,
  Twitter,
  Linkedin,
  Hash,
  Clock,
  Users,
  Globe,
  MapPin,
  CircleUserRound,
  Clipboard,
  Mountain,
  History
} from "lucide-react";
import {IoIosArrowDown} from "react-icons/io";

import {CaretSortIcon, CheckIcon} from "@radix-ui/react-icons"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuItem
} from "@/components/ui/navigation-menu";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button";

import {
  Table,
  TableBody,

  TableCell,

  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {useRouter} from "next/router";
import NavbarTop from "@/components/uiSelf/navbarTop";
import InputSearch from "@/components/uiSelf/inputSearch";

export default function Home() {
  const {user, logout} = useUserStore();

  useEffect(() => {
    if (user.name) {
      console.log("User data is available:", user);
    } else {
      console.log("User data is not available yet.");
    }
  }, [user]);


  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const [open2, setOpen2] = React.useState(false)
  const [value2, setValue2] = React.useState("")
  const [open3, setOpen3] = React.useState(false)
  const [value3, setValue3] = React.useState("")


  const router = useRouter();


  const data = [
    {
      value: "sick",
      label: "Sick",
    },
    {
      value: "blablabla",
      label: "Blablabla",
    },
    {
      value: "test",
      label: "Test",
    },
    {
      value: "all",
      label: "All",
    },
    {
      value: "balance",
      label: "Balance History",
    },
  ]


  const invoices = [
    {
      date: "23/05/2024",
      description: "Accrual for 23/05/2024 to 20/11/2024",
      usedDays: "",
      earnedDays: "3.00",
      balance: "3.00",
    },
    {
      date: "23/05/2024",
      description: "Accrual for 23/05/2024 to 20/11/2024",
      usedDays: "-6",
      earnedDays: "",
      balance: "3.00",
    },
    {
      date: "23/05/2024",
      description: "Accrual for 23/05/2024 to 20/11/2024",
      usedDays: "",
      earnedDays: "3.00",
      balance: "3.00",
    },
    {
      date: "23/05/2024",
      description: "Accrual for 23/05/2024 to 20/11/2024",
      usedDays: "",
      earnedDays: "3.00",
      balance: "3.00",
    },
    {
      date: "23/05/2024",
      description: "Accrual for 23/05/2024 to 20/11/2024",
      usedDays: "-6",
      earnedDays: "",
      balance: "3.00",
    },
    {
      date: "23/05/2024",
      description: "Accrual for 23/05/2024 to 20/11/2024",
      usedDays: "",
      earnedDays: "3.00",
      balance: "3.00",
    },

  ]

  const exit = () => {
    logout();
    localStorage.removeItem("access_token")
    router.push('/')
  }

  return (
    <div className={"flex flex-col justify-center items-center min-w-screen  bg-gray-300 min-w-[360px]"}>

      <div className={"flex flex-col justify-center items-center w-full max-w-[1440px] "}>

        {/*Вверхняя панель*/}
        <div className="mx-auto px-6 flex justify-between w-full items-center h-[86px] bg-white">

          <div className={"font-bold text-[100%]  min-w-[116px] mr-1"}>
            HarmonyHR
          </div>

          <div className={"flex-col justify-end items-end mt-6 hidden md:flex w-[523px] h-[54px] "}>
            <NavbarTop/>
          </div>

          {/*Блок с иконками*/}
          <div className={"flex justify-end md:justify-between items-center gap-2 w-6/12 md:gap-3 p-2"}>
            <div className="relative md:w-6/12 sm:w-4/12 w-[30px]">
              <InputSearch/>
            </div>

            <div className={"flex flex-row items-center md:gap-[24px] justify-center"}>
              <div className={"hidden md:flex  items-center  lg:gap-[24px] md:gap-[6px] justify-between "}>
                <Settings size={24}/>
                <CircleHelp size={24}/>
                <Bell size={24}/>
                <MdLogout className={"cursor-pointer"} size={24} onClick={() => {
                  exit();
                }}/>
              </div>
              <div className={"md:hidden mr-[10%]"}>
                <IoMenu size={24}/>
              </div>
              <div className={"mr-1 w-[38px] h-[38px]"}>
                <Avatar>
                  <AvatarImage src={user.avatar}/>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>


        {/*Средняя панель*/}
        <div className={"flex flex-row bg-bbb items-center justify-center w-full "}>

          <div className={"w-full h-[200px] flex px-20 pt-5 gap-10  max-[1191px]:px-1"}>

            <div className={"max-[1191px]:hidden"}>
              <aside className={"flex justify-center min-w-[225px] h-[150px] mt-7"}>
                <Avatar className={" md:w-[150px] md:h-[150px] z-10 "}>
                  <AvatarImage src={user.avatar}/>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </aside>
            </div>



            <div className={"flex justify-between flex-col h-full w-[1047px] w-full"}>
              <aside className={"max-[1191px]:flex hidden flex-row items-center justify-between px-12 w-full"}>
                  <Avatar className={"w-[100px] h-[100px] z-10  m-5"}>
                    <AvatarImage src={user.avatar}/>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className={"font-semibold text-[28px]"}>
                    {user.name}
                  </div>
                  <div>
                    <SlOptionsVertical size={16}/>
                  </div>
              </aside>

              <div className={"flex max-[1191px]:hidden  justify-between w-[100%] h-full pt-10 items-center "}>
                <div className={"flex font-semibold text-[28px]"}>
                  {user.name}
                </div>
                <div className={"flex max-[1191px]:hidden"}>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className={"bg-inherit border-2 border-borc"}>Request a
                          Change</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3% p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                              <NavigationMenuLink asChild>
                                <div>
                                  <div className="mb-2 mt-4 text-lg font-medium">
                                    Test
                                  </div>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    test test test test test test test test test test test test test test test test
                                  </p>
                                </div>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger
                          className={"bg-inherit border-2 border-borc"}><Settings/></NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            <li className="row-span-3">
                              <NavigationMenuLink asChild>
                                <div>
                                  <div className="mb-2 mt-4 text-lg font-medium">
                                    Test
                                  </div>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    test test test test test test test test test test test test test test test test
                                  </p>
                                </div>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>

                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>

              </div>


              <div className="w-full max-[1191px]:overflow-x-scroll max-[1191px]:overflow-y-hidden  ">
                <Tabs defaultValue="time" className="w-full h-full ">
                  <TabsList
                    className={"justify-between flex flex-row bg-bbb  mt-[10px] w-full relative "}>
                    <TabsTrigger className={"w-full h-full py-6 data-[state=active]:bg-white"}
                                 value="personal">Personal</TabsTrigger>
                    <TabsTrigger className={"w-full h-full py-6 data-[state=active]:bg-white"}
                                 value="job">Job</TabsTrigger>
                    <TabsTrigger className={"w-full h-full py-6 data-[state=active]:bg-white"} value="time">Time
                      Off</TabsTrigger>
                    <TabsTrigger className={"w-full h-full py-6 data-[state=active]:bg-white"}
                                 value="emergency">Emergency</TabsTrigger>
                    <TabsTrigger className={"w-full h-full py-6 data-[state=active]:bg-white"}
                                 value="documents">Documents</TabsTrigger>
                    <TabsTrigger className={"w-full h-full py-6 data-[state=active]:bg-white"}
                                 value="notes">Notes</TabsTrigger>
                    <TabsTrigger className={"w-full h-full py-6 data-[state=active]:bg-white"}
                                 value="benefits">Benefits</TabsTrigger>
                    <TabsTrigger className={"w-full h-full py-6 data-[state=active]:bg-white"}
                                 value="training">Training</TabsTrigger>
                    <TabsTrigger className={"w-full h-full py-6 data-[state=active]:bg-white"}
                                 value="assets">Assets</TabsTrigger>
                    <TabsTrigger className={"w-full h-full py-6 data-[state=active]:bg-white"}
                                 value="settings">More <IoIosArrowDown size={25}/></TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>

        </div>

        {/*Основная панель */}

        <div className={"flex flex-row bg-bbb items-center justify-center w-full "}>
          <div className={"flex flex-row w-full px-20 gap-10  box-border bg-gphone max-[1191px]:px-1"}>
            <div className={"flex-col flex  min-w-[225px] w-[225px] gap-6 -mt-4 max-[1191px]:hidden"}>
              <Card className={"max-[1191px]:hidden"}>
                <CardContent className={"flex flex-col gap-2 pt-6 text-sm font-semibold "}>
                  <div className={"flex gap-3"}><Phone/>07911 654321</div>
                  <div className={"flex gap-3"}><Mail/>avd.yana@videorollnet</div>
                  <div className={"flex gap-3"}><Linkedin/><Facebook/><Twitter/></div>
                </CardContent>
              </Card>
              <Card className={"max-[1191px]:hidden"}>
                <CardContent className={"flex flex-col gap-2 pt-6 text-sm font-semibold"}>
                  <div className={"flex gap-3 mb-2"}>Hire Date</div>
                  <div className={"flex gap-3"}>Sep.3,2020</div>
                  <div className={"flex gap-3"}>3y - 9m - 20d</div>
                </CardContent>
              </Card>
              <Card className={"max-[1191px]:hidden"}>
                <CardContent className={"flex flex-col gap-2 pt-6 text-sm font-semibold"}>
                  <div className={"flex gap-3"}><Hash/> 5</div>
                  <div className={"flex gap-3"}><Clock/>Full-Time</div>
                  <div className={"flex gap-3"}><Users/>Operations</div>
                  <div className={"flex gap-3"}><Globe/>Europe</div>
                  <div className={"flex gap-3"}><MapPin/>London, UK</div>
                </CardContent>
              </Card>
              <Card className={"max-[1191px]:hidden"}>
                <CardContent className={"flex flex-col gap-2 pt-6 text-sm font-semibold"}>
                  <div className={"flex gap-3"}>Direct Reports</div>
                  <div className={"flex gap-3"}><CircleUserRound/>Shane</div>
                  <div className={"flex gap-3"}><CircleUserRound/>Nathan</div>
                  <div className={"flex gap-3"}><CircleUserRound/>Mitchel</div>
                  <div className={"flex gap-3"}><CircleUserRound/>Philip</div>
                  <div className={"flex gap-3"}><Users/>4 More...</div>
                </CardContent>
              </Card>
            </div>
            <div className={"flex flex-col justify-between items-center max-w-[1047px] w-full  px-3 bg-white z-30"}>
              <div className={"py-12 box-border w-full"}>
                <div className={"flex flex-row w-full justify-between items-center p-2"}>
                  <div className={"flex flex-row font-medium text-grayText text-[20px] items-center gap-2"}>
                    <Clipboard/>
                    Time Off
                  </div>

                  <div className={"flex flex-row gap-8 items-center bg-red-600 max-[540px]:flex-col max-[540px]:justify-center max-[540px]:gap-2 max-[540px]:whitespace-nowrap"}>
                    <div className={"font-medium text-[14px]"}>
                      Accrual Level Start Date <span className={"text-accentText"}>03/09-2020</span>
                    </div>

                    <Button className={"bg-inherit text-black hover:bg-inherit border-black border-2"}>Add Time Off
                      Policy</Button>
                  </div>
                </div>
                <Separator/>
                <div className={"flex flex-row justify-center gap-10 w-full max-[1191px]:overflow-x-scroll max-[1191px]:ml-4 max-[1191px]:w-[96%]"}>
                  <div className={"flex whitespace-nowrap gap-10 flex-nowrap w-full justify-between max-[1191px]:pr-8"}>
                  <div className={"flex flex-col justify-center items-center min-w-[210px] max-w-[264px] max-[1440px]:w-[25%] w-[264px] "}>
                    <div
                      className={"bg-gphone max-w-[264px] w-full h-[138px] flex flex-col justify-center items-center rounded-lg mt-8 mx-8"}>
                      <div className={"font-semibold text-[20px] text-icon"}>Sick</div>
                      <div className={"flex flex-row"}>
                        <div className={"flex items-center text-[30px] font-semibold gap-2 text-icon"}><LuCross
                          size={50}/>3
                        </div>
                      </div>
                      <div>Days Available</div>
                      <div className={"text-gset font-semibold"}>1 dey scheduled</div>
                    </div>
                    <div className={"text-gset font-medium"}>Sick Full-Time</div>
                  </div>
                  <div className={"flex flex-col justify-center items-center min-w-[210px] max-w-[264px] max-[1440px]:w-[25%] w-[264px] "}>
                    <div
                      className={"bg-gphone max-w-[264px] w-full h-[138px] flex flex-col justify-center items-center rounded-lg mt-8 mx-8 text-[20px] text-icon font-semibold"}>
                      <div>Annual Leave</div>
                      <div className={"flex flex-row"}>
                        <div className={"flex items-center text-[30px] font-semibold gap-2"}>
                          <Mountain size={50}/>10.3
                        </div>
                      </div>
                      <div className={"text-[14px]"}>Days Available</div>
                    </div>
                    <div className={"text-gset font-medium"}>Holiday Full-Time</div>
                  </div>
                  <div className={"flex flex-col justify-center items-center min-w-[210px] max-w-[264px] max-[1440px]:w-[25%] w-[264px]  whitespace-nowrap"}>
                    <div
                      className={"bg-gphone max-w-[264px] w-full h-[138px] flex flex-col justify-center items-center rounded-lg mt-8 mx-8 text-[20px] text-icon font-semibold"}>
                      <div>Comp/in Lieu Time</div>
                      <div className={"flex flex-row"}>
                        <div className={"flex items-center text-[30px] font-semibold gap-2"}><Clipboard size={50}/> 0
                        </div>
                      </div>
                      <div className={"text-[14px]"}>Human Used(YTD)</div>
                    </div>
                    <div className={"text-gset font-medium"}>Comp/in Lieu Time Flexible Policy</div>
                  </div>
                </div>
                </div>
                <div className={"flex flex-row p-2 mt-3 font-medium text-grayText text-[14px] items-center gap-2"}>
                  <Clock/> Upcoming Time Off
                </div>
                <Separator/>
                <div className={"p-2 flex py-5 w-full"}>
                  <LuCross size={50}/>
                  <div className={"flex flex-col"}>
                    <div className={"ml-2"}>Jan 27</div>
                    <div className={"flex flex-row justify-start items-center"}><GoDotFill size={20}/> 1 dey of Sick
                    </div>
                  </div>
                </div>
                <Separator/>
                <div className={"p-2 py-5 flex  w-full"}>
                  <TbPigMoney size={50}/>
                  <div className={"flex flex-col "}>
                    <div>Jul 4</div>
                    <div className={"flex flex-row"}>Independence Day</div>
                  </div>
                </div>
                <Separator/>
                <div className={"p-2 flex flex-col w-full"}>
                  <div className={"flex  w-full flex-row font-medium text-grayText text-[14px] items-center gap-2"}><History/>History
                  </div>
                  <div className={"py-4 w-full gap-4 flex flex-row justify-start"}>
                    <div className={"flex w-4/12"}>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger className={"w-full"} asChild >
                          <Button
                            variant="outline"
                            aria-expanded={open}
                            className="w-full text-base justify-between">
                            {value
                              ? data.find((d) => d.value === value)?.label
                              : "Select data..."}
                            <CaretSortIcon className=" ml-2 h-4 w-4 shrink-0 opacity-50 text-base"/>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className=" p-0 text-base">
                          <Command>
                            <CommandInput placeholder="Search data..." className="h-9"/>
                            <CommandList>
                              <CommandEmpty>No framework found.</CommandEmpty>
                              <CommandGroup>
                                {data.map((d) => (
                                  <CommandItem
                                    key={d.value}
                                    value={d.value}
                                    onSelect={(currentValue) => {
                                      setValue(currentValue === value ? "" : currentValue)
                                      setOpen(false)
                                    }}
                                  >
                                    {d.label}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        value === d.value ? "opacity-100" : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className={"flex w-8/12 justify-between"}>


                      <Popover open={open2} onOpenChange={setOpen2}>
                        <PopoverTrigger className={"w-4/12"} asChild>
                          <Button
                            variant="outline"
                            aria-expanded={open2}
                            className="w-3/12 justify-between min-w-[130px]"
                          >
                            {value2
                              ? data.find((d) => d.value === value2)?.label
                              : "Select data..."}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className=" p-0">
                          <Command>
                            <CommandInput placeholder="Search data..." className="h-9"/>
                            <CommandList>
                              <CommandEmpty>No framework found.</CommandEmpty>
                              <CommandGroup>
                                {data.map((d) => (
                                  <CommandItem
                                    key={d.value}
                                    value={d.value}
                                    onSelect={(currentValue) => {
                                      setValue2(currentValue === value ? "" : currentValue)
                                      setOpen2(false)
                                    }}
                                  >
                                    {d.label}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        value2 === d.value ? "opacity-100" : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>



                      <Popover open={open3} onOpenChange={setOpen3}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            aria-expanded={open3}
                            className=" justify-between"
                          >
                            {value3
                              ? data.find((d) => d.value === value3)?.label
                              : "Select framework..."}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className=" p-0">
                          <Command>
                            <CommandInput placeholder="Search data..." className="h-9"/>
                            <CommandList>
                              <CommandEmpty>No framework found.</CommandEmpty>
                              <CommandGroup>
                                {data.map((d) => (
                                  <CommandItem
                                    key={d.value}
                                    value={d.value}
                                    onSelect={(currentValue) => {
                                      setValue3(currentValue === value3 ? "" : currentValue)
                                      setOpen3(false)
                                    }}
                                  >
                                    {d.label}
                                    <CheckIcon
                                      className={cn(
                                        "ml-auto h-4 w-4",
                                        value3 === d.value ? "opacity-100" : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
                <div>
                  <Table>
                    <TableHeader className={"bg-bbb font-medium text-sm w-full"}>
                      <TableRow>
                        <TableHead className="flex items-center text-black">
                          <div>Date</div>
                          <div><IoIosArrowRoundDown size={30}/></div>
                        </TableHead>
                        <TableHead className="text-black">Description</TableHead>
                        <TableHead className="text-black">Used Days(-)</TableHead>
                        <TableHead className="text-black">Earned days(+)</TableHead>
                        <TableHead className="text-black">Balance</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className={"font-medium text-sm"}>
                      {invoices.map((invoice, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{invoice.date}</TableCell>
                          <TableCell>{invoice.description}</TableCell>
                          <TableCell>{invoice.usedDays}</TableCell>
                          <TableCell>{invoice.earnedDays}</TableCell>
                          <TableCell className="text-right">{invoice.balance}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>

                  </Table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






