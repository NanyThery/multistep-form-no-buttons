import "./App.css";
import FormContainer from "./container/FormContainer";

export default function App() {
  return (
    <div className="App">
      <h1>This is a multi-step form demo</h1>
      <h2>But with no 'next' buttons...⌨️</h2>
      <FormContainer />
    </div>
  );
}
