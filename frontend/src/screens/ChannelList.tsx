import { Link } from "react-router-dom";
import { useChannelContext } from "../hooks/useChannelContext";

export const ChannelList = () => {
  const { channels } = useChannelContext();

  return (
    <ul>
      {channels.map((channel) => (
        <li key={channel.id}>
          <Link to={`/chat/${channel.id}`}>{channel.name}</Link>
        </li>
      ))}
    </ul>
  );
};
