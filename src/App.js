import Navbar from "./Components/Navbar/Navbar";
import Chat from "./Components/Chat/Chat";
import { auth } from '../src/firebase/firebase'


function App() {
  return (
    <div className="App">
      <Navbar />
      {auth.currentUser? <Chat />:null}
    </div>
  );
}

export default App;
