import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatBody from "./components/ChatBody";

function App() {
  return (
    <>
      <Header />
      <div className="">
        <Sidebar />
        <ChatBody />
      </div>
    </>
  );
}

export default App;
