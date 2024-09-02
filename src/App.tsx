import DisplayPosts from "./components/DisplayPosts";
import { Button } from "./components/ui/button";

// Desc: Main App component for the application.
function App() {
  return (
    <>
      <div className="text-red-900 text-xl font-semibold">
        <Button variant="destructive">paycraft-frontend</Button>
         <br />
        <DisplayPosts/>
      </div>
    </>
  );
}

export default App;
