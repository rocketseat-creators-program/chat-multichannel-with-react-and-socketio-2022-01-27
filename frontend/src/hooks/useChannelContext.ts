import { useContext } from "react";
import { ChannelContext } from "../context/ChannelContext";

export const useChannelContext = () => {
  const context = useContext(ChannelContext);

  return context;
};
