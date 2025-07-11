import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import NewsList from "./components/NewsList";
import NewsDetail from "./components/NewsDetail";
import About from "./components/About";
import EditPost from "./components/EditPost";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <div className="app-layout">
        <Header onSearch={setSearchQuery} />
        <div className="main-content">
          <Sidebar />
          <div className="page-content">
            <Routes>
              <Route
                path="/"
                element={<NewsList searchQuery={searchQuery} />}
              />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/edit/:id" element={<EditPost />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
