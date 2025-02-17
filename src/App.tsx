import { useState } from "react";
import AWSMNavbar from "./components/AWSMNavbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AWSMNavbar></AWSMNavbar>
    </>
  );
}

export default App;
