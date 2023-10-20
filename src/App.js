import "./App.css";
import Navbar from "./components/Navbar";
import Speech from "./components/Speech";
import SIHShortLogo from "./media/SIHShort-Logo.png";

function App() {
  return (
    <>
      {/* <Speech/> */}
      <Navbar />
      <div class="absolute bottom-1 left-1 ...">
        <img src={SIHShortLogo} style={{ height: "40px" }} alt="" />
      </div>
    </>
  );
}

export default App;
