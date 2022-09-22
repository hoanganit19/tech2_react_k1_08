import Counter from "./components/Counter";
import Product from "./components/Product";
function App() {
  
  return (
    <>
      <h1>React Redux</h1>
      <Counter step={3}/>
      <Product />
    </>
  );
}

export default App;
