import React, { memo } from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.module.css";
import Mouse from "./components/mouse/mouse";
import Nav from "./components/nav/nav";
import ContactRepository from "./service/contact_repository";

const Cursor = memo((props) => <Mouse />);
const NavBtn = memo((props) => <Nav />);

const contactRepository = new ContactRepository();

ReactDOM.render(
  <React.StrictMode>
    <App
      Cursor={Cursor}
      NavBtn={NavBtn}
      contactRepository={contactRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
