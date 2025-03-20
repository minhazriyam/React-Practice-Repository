import { useState } from "react";
import Add from "./assets/components/Add";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-green-600 to-blue-500 flex justify-between items-center">
      <Add />
    </div>
  );
}

export default App;
