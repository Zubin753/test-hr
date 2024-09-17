import React, {useEffect} from 'react';
import useUserStore from '@/store/store';
import {GoDotFill} from "react-icons/go";
import {TbPigMoney} from "react-icons/tb";
import {LuCross} from "react-icons/lu";
import {IoIosArrowRoundDown} from "react-icons/io";
import { MdLogout } from "react-icons/md";
import {Separator} from "@/components/ui/separator"
import { IoMenu } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
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
import { IoIosArrowDown } from "react-icons/io";

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
    <div className={"flex flex-col justify-center w-full"}>

      {/*Вверхняя панель*/}
      <div className="flex flex-row min-w-full justify-between px-6 pt-4 items-center relative">

        <div className={"pb-4 font-bold text-[100%] mr-[0.5%]"}>
          HarmonyHR
        </div>

        <div className={"w-4/12  mt-5 hidden md:inline-block min-w-[370px] mr-[0.5%]"}>
         <NavbarTop/>
        </div>

        <div className={"flex justify-end md:justify-between items-center gap-0 w-6/12 md:gap-3"}>
          <div className="relative md:w-6/12 w-[40px]">
            <InputSearch/>
          </div>

          <div className={"flex flex-row w-4/12 items-center md:gap-[10%] justify-center"}>
            <div className={"hidden md:flex flex-row w-40 items-center gap-10% justify-between"}>
              <Settings/>
              <CircleHelp/>
              <Bell/>
              <MdLogout className={"cursor-pointer"} size={25} onClick={() => {
                exit();
              }}/>
            </div>
            <div className={"md:hidden mr-[10%]"}>
              <IoMenu size={30}/>
            </div>
            <Avatar>
              <AvatarImage src={user.avatar}/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>


      <div className={"flex relative flex-row  bg-bbb items-center justify-center w-full"}>
        <div className={"w-full h-[200px] flex flex-row items-center gap-[4.75%] "}>
          <div className={"pt-12  hidden lg:flex lg:justify-center bg-green-400 ml-[7%] relative"}>
            <Avatar className={" md:w-[150px] md:h-[150px] z-10 "}>
              <AvatarImage src={user.avatar}/>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className={"flex justify-between flex-col h-full w-[100%]"}>
            <div className={"lg:hidden flex flex-row items-center justify-between px-12"}>
                <Avatar className={"w-[100px] h-[100px] z-10 lg:hidden m-5"}>
                  <AvatarImage src={user.avatar}/>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className={"font-semibold text-[28px]"}>
                  {user.name}
                </div>
                <div>
                  <SlOptionsVertical size={30}/>
                </div>
              </div>

            <div className={"hidden md:flex justify-between w-[100%] h-full pt-10 items-center "}>
              <div className={"flex font-semibold text-[28px]"}>
                {user.name}
              </div>
              <div className={"hidden lg:flex  lg:mr-10 mr-[29%]"}>
                <NavigationMenu>
                  <NavigationMenuList >
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


            <div className="relative w-full ">
              <Tabs defaultValue="time" className="w-full pr-[3.3%]">
                <TabsList className={"justify-between flex flex-row bg-bbb over mt-[10px] w-full relative overflow-x-scroll overflow-y-hidden md:overflow-x-visible md:overflow-y-visible"}>
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
                               value="settings">More  <IoIosArrowDown size={25}/></TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <div className={"bg-gphone w-full  relative"}>
        <div className={"flex flex-row justify-center relative bg-red-600  w-full gap-x-[2%]"}>
          <div className={"flex-col  relative bg-fuchsia-500 min-w-2/12 hidden lg:flex"}>
            <div className={"flex flex-col relative gap-6 -mt-4 "}>
              <Card>
                <CardContent className={"flex flex-col gap-2 pt-6 text-sm font-semibold "}>
                  <div className={"flex gap-3"}><Phone/>07911 654321</div>
                  <div className={"flex gap-3"}><Mail/>avd.yana@videorollnet</div>
                  <div className={"flex gap-3"}><Linkedin/><Facebook/><Twitter/></div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className={"flex flex-col gap-2 pt-6 text-sm font-semibold"}>
                  <div className={"flex gap-3 mb-2"}>Hire Date</div>
                  <div className={"flex gap-3"}>Sep.3,2020</div>
                  <div className={"flex gap-3"}>3y - 9m - 20d</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className={"flex flex-col gap-2 pt-6 text-sm font-semibold"}>
                  <div className={"flex gap-3"}><Hash/> 5</div>
                  <div className={"flex gap-3"}><Clock/>Full-Time</div>
                  <div className={"flex gap-3"}><Users/>Operations</div>
                  <div className={"flex gap-3"}><Globe/>Europe</div>
                  <div className={"flex gap-3"}><MapPin/>London, UK</div>
                </CardContent>
              </Card>
              <Card>
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

          </div>
          <div className={"flex flex-col justify-center  w-9/12 bg-green-400"}>
            <Card className={"flex flex-column justify-center bg-white rounded-none border-none"}>
              <CardContent className={"w-full py-12"}>
                <div className={"flex flex-row w-full justify-between items-center p-2"}>
                  <div className={"flex flex-row font-medium text-grayText text-[20px] items-center gap-2"}>
                    <Clipboard/>
                    Time Off
                  </div>

                  <div className={"flex flex-row gap-8 items-center"}>
                    <div className={"font-medium text-[14px]"}>
                      Accrual Level Start Date <span className={"text-accentText"}>03/09-2020</span>
                    </div>

                    <Button className={"bg-inherit text-black hover:bg-inherit border-black border-2"}>Add Time Off
                      Policy</Button>
                  </div>
                </div>
                <Separator/>
                <div className={"flex flex-row justify-center"}>
                  <div className={"flex flex-col justify-center items-center"}>
                    <div
                      className={"bg-gphone w-[264px] h-[138px] flex flex-col justify-center items-center rounded-lg mt-8 mx-8"}>
                      <div className={"font-semibold text-[20px] text-icon"}>Sick</div>
                      <div className={"flex flex-row"}>
                        <div className={"flex items-center text-[30px] font-semibold gap-2 text-icon"}><LuCross size={50}/>3</div>
                      </div>
                      <div>Days Available</div>
                      <div className={"text-gset font-semibold"}>1 dey scheduled</div>
                    </div>
                    <div className={"text-gset font-medium"}>Sick Full-Time</div>
                  </div>
                  <div className={"flex flex-col justify-center items-center"}>
                    <div
                      className={"bg-gphone w-[264px] h-[138px] flex flex-col justify-center items-center rounded-lg mt-8 mx-8 text-[20px] text-icon font-semibold"}>
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
                  <div className={"flex flex-col justify-center items-center"}>
                    <div
                      className={"bg-gphone w-[264px] h-[138px] flex flex-col justify-center items-center rounded-lg mt-8 mx-8 text-[20px] text-icon font-semibold"}>
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
                <div className={"flex flex-row p-2 mt-3 font-medium text-grayText text-[14px] items-center gap-2"}>
                  <Clock/> Upcoming Time Off
                </div>
                <Separator/>
                <div className={"p-2 flex flex-row py-5"}>
                  <LuCross size={50}/>
                  <div className={"flex flex-col"}>
                    <div className={"ml-2"}>Jan 27</div>
                    <div className={"flex flex-row justify-start items-center"}><GoDotFill size={20}/> 1 dey of Sick
                    </div>
                  </div>
                </div>
                <Separator/>
                <div className={"p-2 py-5 flex flex-row"}>
                  <TbPigMoney size={50}/>
                  <div className={"flex flex-col"}>
                    <div>Jul 4</div>
                    <div className={"flex flex-row"}>Independence Day</div>
                  </div>
                </div>
                <Separator/>
                <div className={"p-2 flex flex-col"}>
                  <div className={"flex flex-row font-medium text-grayText text-[14px] items-center gap-2"}><History/>History
                  </div>
                  <div className={"py-4 flex flex-row justify-between"}>
                    <div className={"flex gap-8"}>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            aria-expanded={open}
                            className="w-[280px] text-base justify-between">
                            {value
                              ? data.find((d) => d.value === value)?.label
                              : "Select data..."}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50 text-base"/>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0 text-base">
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

                      <Popover open={open2} onOpenChange={setOpen2}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            aria-expanded={open2}
                            className="w-[150px] justify-between"
                          >
                            {value2
                              ? data.find((d) => d.value === value2)?.label
                              : "Select data..."}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[120px] p-0">
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
                    </div>
                    <div>
                      <Popover open={open3} onOpenChange={setOpen3}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            aria-expanded={open3}
                            className="w-[200px] justify-between"
                          >
                            {value3
                              ? data.find((d) => d.value === value3)?.label
                              : "Select framework..."}
                            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
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

                    <TableHeader className={"bg-bbb font-medium text-sm"}>
                      <TableRow>
                        <TableHead className="w-[100px] flex items-center text-black">
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
              </CardContent>

            </Card>
          </div>
        </div>
      </div>


    </div>
  );
}






