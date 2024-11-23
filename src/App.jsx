import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Createpost from "./components/Createpost";
import Postlist from "./components/Postlist";
import { useState } from "react";
import PostContextProvider from "./stores/Poststore.jsx";

function App() {
  const [selectedTab, setSelectedTab] = useState("Create post");

  return (
    <PostContextProvider>
      <div className="container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <div className="content">
          <Header />
          {selectedTab === "Home" ? <Postlist /> : <Createpost />}

          <Footer />
        </div>
      </div>
    </PostContextProvider>
  );
}

export default App;
