import "./App.css";
import logoImage from "./img/logo.jpg";
import menuImage from "./img/menu.png";
import searchImage from "./img/search.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NovelList from "./composants/NovelList";
import Addnovel from "./composants/AddNovel";
import Updatenovel from "./composants/UpdateNovel";

function MenuPage() {
  return (
    <div className="menu-page">
      <div className="profil-button">
        <img src="" alt="" />
        <button>Home</button><br /><br />
        <button>Write Novel</button>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="menu">
        <img src={menuImage} alt="" />
      </div>
      <div className="search-bar">
        <img src={searchImage} alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="logo">
        <img src={logoImage} alt="" />
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
        <div>
        <NavBar />
        <main>
          <MenuPage />
        </main>
      </div> 
        
      <div className="App">
      <h1>Write Novel</h1><br/><br/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NovelList />} />
      <Route path='/add-novel' element={<Addnovel />} />
      <Route path='/update-novel/:id' element={<Updatenovel />} />

      </Routes>  
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
