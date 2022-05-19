const initialstate = {
    numofIcecream:20
}

const Icecreamreducer = (state=initialstate,action) =>{
    switch(action.type){
        case "BUY_ICECREAM":
            return {
                 ...state,  //make copy of object
                 numofIcecream:state.numofIcecream-action.payload
            }
        default: return state;    
    }

}
export default Icecreamreducer;