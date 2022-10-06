// import Counter from "./components/Counter";
// import Product from "./components/Product";
// import ToDo from "./components/ToDo/ToDo";
import './Assets/Scss/Fonts.scss';
import Button from "./components/Button/Button";
import Input from './components/Input/Input';
import Toggle from './components/Toggle/Toggle';
// import logo from './logo.svg';
function App() {
  // if (process.env.NODE_ENV=='developement'){

  // }
  return (
    <>
      {/* <h1>Redux Toolkit</h1>
      <ToDo /> */}
      {/* <Button />
      <Button />
      <Input /> */}
      <Toggle />
      <img src={`${process.env.PUBLIC_URL}/logo192.png`} />
    </>
  );
}

export default App;
