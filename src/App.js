import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import MessageSender from "./MessageSender";
import Messenger from "./Messenger";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";
import Widgets from "./Widgets";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <BrowserRouter>
          <Header />

          <div className="app__body">
            <Sidebar />

            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/messenger" element={<Messenger />} />
            </Routes>

            <Widgets />
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
