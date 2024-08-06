import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Sidebar from "./assets/components/sidebar";
import CreatePost from "./assets/components/createPost";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="content">
        <Header></Header>
        <CreatePost></CreatePost>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default App;
