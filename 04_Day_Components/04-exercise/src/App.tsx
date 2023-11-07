import ColorBlock from "./components/ColorBlock";

function App() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="flex flex-col">
        <ColorBlock />
        <ColorBlock />
        <ColorBlock />
        <ColorBlock />
        <ColorBlock />
      </div>
    </div>
  );
}

export default App;
