import Navbar from "./layout/Navbar/Navbar";
import Sidebar from "./layout/Sidebar/Sidebar";
import Main from "./layout/Main/Main";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Main>
        <MainPage />
      </Main>
    </div>
  );
}
export default App;
