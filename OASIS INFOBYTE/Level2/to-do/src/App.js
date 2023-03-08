import "./App.css";
import PageTitle from "./components/Title/PageTitle";
import Header from "./components/header/Header";
import AppContent from "./components/Content/AppContent";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="App">
        <PageTitle />
        <div className="app__wrapper">
          <Header />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
}

export default App;
