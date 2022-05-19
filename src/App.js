import React from "react";
import { Provider } from "react-redux";
import Cakecomponent from "./component/Cakecomponent";
import Icecreamcomponent from "./component/Icecreamcomponent";
import Multicakebuy from "./component/Multicakebuy";
import Mulicecreambuy from "./component/Mulicecreambuy";
import Store from "./redux/Store";

Store.subscribe(() => console.log(Store.getState()));

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <div className="cake">
          <Cakecomponent />
          <Multicakebuy />
        </div>
        <div className="ice_cream">
          <Icecreamcomponent />
          <Mulicecreambuy />
        </div>
      </Provider>
    </>
  );
};

export default App;
