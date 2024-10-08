import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Sidebar from "./assets/components/Sidebar";
import CreatePost from "./assets/components/CreatePost";
import PostList from "./assets/components/PostList";
import "./App.css";
import { useState } from "react";
import PostListProvider from "./assets/store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (<PostListProvider>
    <div className="app-container">
      <Sidebar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Sidebar>
      <div className="content">
        <Header></Header>
        {selectedTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )}
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}
export default App;
