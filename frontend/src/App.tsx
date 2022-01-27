import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChannelCreate } from "./screens/ChannelCreate";
import { ChannelList } from "./screens/ChannelList";
import { Chat } from "./screens/Chat";
import { Login } from "./screens/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/chat/:channelId" element={<Chat />} />

          <Route
            path="/channels"
            element={
              <>
                <ChannelCreate />
                <ChannelList />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
