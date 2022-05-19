import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Buycake } from '../redux/cake/cakeaction';



const Cakecomponent = () => {
    const numofcake = useSelector((state)=>state.cake.numOfCakes);
    const dispatch = useDispatch();
 
    return(
      <>
        <div className="div_block">
            <h2>number  of remaining Cake:{numofcake}</h2>
            <Button variant="contained" onClick={() =>dispatch(Buycake())}>Buy Cake</Button>
        </div>
      </>
 )
}

export default Cakecomponent;