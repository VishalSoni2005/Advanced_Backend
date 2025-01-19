import "./App.css";
import Table from "./components/custom/Table.tsx";
import CardWithForm from "./components/custom/Card.tsx";

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-around">
      {/* add another email address */}
      <div className="w-auto border-[3px] rounded-3xl border-blue-800 p-4">
        <CardWithForm />
      </div>

      {/* // table */}
      <div className="w-1/2 border-[3px] rounded-3xl border-yellow-800 p-4">
        <Table />
      </div>
    </div>
  );
}

export default App;
