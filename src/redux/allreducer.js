import { combineReducers } from "redux";
import Cakereducer from './cake/cakereducer';
import Icecreamreducer from "./icecream/icecreamreducer";

const Rootreducer = combineReducers(
     {
       cake     :Cakereducer,
       iceCream :Icecreamreducer
     }
  )

  export default Rootreducer;