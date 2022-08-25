import Navbar from "./Components/Navbar/Navbar";
import SignIn from "./Components/SignIn/SignIn";
import Chat from "./Components/Chat/Chat";
import { auth } from "./firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
function App() {
  // const user = useAuthState(auth)
  return (
    <div className="App">
      {/* {console.log(user)} */}
      {/* <SignIn/> */}
      <Navbar />
      <Chat />
      {/* {auth ? <Chat /> : <Chat /> } */}
    </div>
  );
}

export default App;
