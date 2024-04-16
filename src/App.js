import "./App.css";
import Stepper from "./components/Stepper";
import Address from "./steps/Address";
import CustomerInfo from "./steps/CustomerInfo";
import Final from "./steps/Final";
import Payment from "./steps/Payment";

function App() {
  const formSteps = [
    {
      name: "step 1",
      component: () => <CustomerInfo />,
    },
    {
      name: "step 2",
      component: () => <Address />,
    },
    {
      name: "step 3",
      component: () => <Payment />,
    },
    {
      name: "step 4",
      component: () => <Final />,
    },
  ];

  return (
    <div className="App">
      <Stepper formSteps={formSteps} />
    </div>
  );
}

export default App;
