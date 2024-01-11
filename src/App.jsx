import ChatBody from "./components/ChatBody";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <ChatBody />
      </div>
    </>
  );
}

export default App;
