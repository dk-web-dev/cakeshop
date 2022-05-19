import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Buyicecream } from '../redux/icecream/icecreamaction';

const Icecreamcomponent =() => {
    const numofIcecream = useSelector((state) =>state.iceCream.numofIcecream);
    const dispatch = useDispatch();
    return(
        <>
          <div className="div_block">
              <h2>num of Remaining Ice Cream:{numofIcecream}</h2>
              <Button variant="contained" onClick={()=>dispatch(Buyicecream())}>Buy Ice cream</Button>
          </div>
        </>
    )
}

export default Icecreamcomponent;