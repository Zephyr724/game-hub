import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import type { Platform } from "./hooks/useGames";
import { Text, Icon, HStack } from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    //name:PlayStation
    //slug:playstation
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
