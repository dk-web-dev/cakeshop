const initialstate = {
    numOfCakes:10
}

const Cakereducer = (state=initialstate,action) => {
   switch(action.type){
       case "BUY_CAKE":
           return{
            ...state, //copy of array object
            numOfCakes:state.numOfCakes-action.payload
           }
       default : return state;
   }
}

export default Cakereducer;


