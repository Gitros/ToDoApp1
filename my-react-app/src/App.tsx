import "./App.css";
import Layout from "./components/Layout";
import MainView from "./components/MainView";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Layout>
      <Sidebar />
      <MainView />
    </Layout>
  );
}

export default App;
