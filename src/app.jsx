import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Menu from "./components/menu/menu";
import About from "./components/about/about";
import Project from "./components/project/project";
import Contact from "./components/contact/contact";
import Pokemon from "./components/pokemon/pokemon";
import Jintube from "./components/jintube/jintube";
import Jinflix from "./components/jinflix/jinflix";
import Todo from "./components/todo/todo";
import Skt from "./components/skt/skt";
import Sticky from "./components/sticky/sticky";
// import ScrollToTop from "./components/scrollTop/scrollTop";
import ScrollToTop from "react-router-scroll-top";

function App({ Cursor, NavBtn, contactRepository }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home Cursor={Cursor} />
        </Route>
        <Route exact path="/menu">
          <Menu Cursor={Cursor} />
        </Route>
        <Route exact path="/about">
          <About Cursor={Cursor} NavBtn={NavBtn} />
        </Route>
        <Route path="/project">
          <Project Cursor={Cursor} NavBtn={NavBtn} />
        </Route>
        <Route path="/pokemon">
          <ScrollToTop>
            <Pokemon Cursor={Cursor} NavBtn={NavBtn} />
          </ScrollToTop>
        </Route>
        <Route path="/jinflix">
          <ScrollToTop>
            <Jinflix Cursor={Cursor} NavBtn={NavBtn} />
          </ScrollToTop>
        </Route>
        <Route path="/jintube">
          <ScrollToTop>
            <Jintube Cursor={Cursor} NavBtn={NavBtn} />
          </ScrollToTop>
        </Route>
        <Route path="/todo">
          <ScrollToTop>
            <Todo Cursor={Cursor} NavBtn={NavBtn} />
          </ScrollToTop>
        </Route>
        <Route path="/sticky">
          <ScrollToTop>
            <Sticky Cursor={Cursor} NavBtn={NavBtn} />
          </ScrollToTop>
        </Route>
        <Route path="/skt">
          <ScrollToTop>
            <Skt Cursor={Cursor} NavBtn={NavBtn} />
          </ScrollToTop>
        </Route>
        <Route path="/contact">
          <Contact
            Cursor={Cursor}
            NavBtn={NavBtn}
            contactRepository={contactRepository}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
