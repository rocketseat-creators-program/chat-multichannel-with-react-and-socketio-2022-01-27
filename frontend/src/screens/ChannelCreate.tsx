import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChannelContext } from "../hooks/useChannelContext";

export const ChannelCreate = () => {
  const [channelName, setChannelName] = useState("");
  const { createChannel, userName } = useChannelContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName) {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          createChannel(channelName);
          setChannelName("");
        }}
      >
        <p>Nome do canal</p>
        <input
          type="text"
          value={channelName}
          onChange={(ev) => setChannelName(ev.target.value)}
        />

        <button type="submit">Criar</button>
      </form>
    </div>
  );
};
