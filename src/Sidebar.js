import React from "react";
import "./Sidebar.css";
import "./Highlighter.css";
import SidebarRow from "./SidebarRow";
import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  Home,
  People,
  Storefront,
  VideoLibrary,
} from "@mui/icons-material";
import { useStateValue } from "./StateProvider";
import Messenger from "./Messenger";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />

      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <SidebarRow Icon={Home} title="Home" />
      </NavLink>

      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />

      <NavLink to="/messenger" style={{ textDecoration: 'none' }}>
        <div className="card">
          <SidebarRow Icon={Chat} title="Messenger" />
          <span className="top"></span>
          <span className="right"></span>
          <span className="bottom"></span>
          <span className="left"></span>
        </div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
