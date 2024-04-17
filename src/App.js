import "./App.css";
import Stepper from "./components/Stepper";
import Address from "./steps/Address";
import CustomerInfo from "./steps/CustomerInfo";
import Final from "./steps/Final";
import Payment from "./steps/Payment";

function App() {
  const formSteps = [
    {
      name: "Personal Info",
      component: () => <CustomerInfo />,
    },
    {
      name: "Address",
      component: () => <Address />,
    },
    {
      name: "Additional Info",
      component: () => <Payment />,
    },
    {
      name: "Confirmation",
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
