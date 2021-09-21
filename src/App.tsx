import { Container } from "react-bootstrap";
import CreateStore from "./Components/CreateStore/CreateStore";
import Frequent from "./Components/Frequent/Frequent";
import Selling from "./Components/Selling/Selling";
import SellOnZDrop from "./Components/SellOnZDrop/SellOnZDrop";
import Tools from "./Components/Tools/Tools";

function App() {
  return (
    <div>
      <Container>
        <SellOnZDrop/>
        <Selling/>
        <Tools/>
        <CreateStore/>
        <Frequent/>
      </Container>
    </div>
  );
}

export default App;