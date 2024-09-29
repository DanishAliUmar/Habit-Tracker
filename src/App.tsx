import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="">123456789</div>
    </Provider>
  );
}

export default App;
