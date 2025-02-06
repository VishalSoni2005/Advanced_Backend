import { useState } from "react";
import "./App.css";
import api from "./api/axios";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/helo")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4 bg-amber-800 text-black text-3xl ">
      {error ? <div>Error: {error}</div> : null}
      {data ? <div>Data: {data.message}</div> : null}

      <button onClick={() => api.post("/logout")}>Logout</button>
    </div>
  );
}

export default App;
