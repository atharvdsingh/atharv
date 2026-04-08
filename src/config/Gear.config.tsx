import Headphones from "@/components/svgs/devices/Headphones";
import Keyboard from "@/components/svgs/devices/Keyboard";
import Laptop from "@/components/svgs/devices/Laptop";
import Phone from "@/components/svgs/devices/Phone";
import { Gears } from "@/types/config";

export const gears: Gears[] = [
  {
    name: "Samsung Galaxy Book 4 15.6 Full HD | Intel Core i5 1335U | 16GB RAM | 512GB SSD",
    icon: <Laptop />,
    link:"https://amzn.to/3Od4N3l"
    
  },
  {
    name:"Google Pixel 7 5G",
    icon:<Phone/>,
    link:"https://amzn.to/48xtvSM"
  },{
    name:"Cosmic Byte CB-GK-39 Trinity 3 Modes",
    icon:<Keyboard/>,
    link:"https://amzn.to/3PXfnMr"
  },{
    name:"KZ Castor Pro IEM with HD Mic",
    icon:<Headphones/>,
    link:"https://amzn.to/4vne3mk"
  }
];


