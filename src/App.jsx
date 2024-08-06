import Footer from "./assets/components/footer";
import Header from "./assets/components/header";
import Sidebar from "./assets/components/sidebar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="content">
        <Header></Header>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default App;
