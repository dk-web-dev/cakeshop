import React, { useState } from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Buycake } from '../redux/cake/cakeaction';

const Multicakebuy =() => {
    const [num,setnum] = useState("");
    const changehandler = (event) => {
         setnum(event.target.value);
    }

    const numofcake=useSelector((state)=>state.cake.numOfCakes);
    const dispatch = useDispatch();
    
    return(
        <>
          <div className="div_block">
              <h2>num of Remaining Cake:{numofcake}</h2>
              <Input type="text" placeholder="buy cake"  value={num} onChange={changehandler} />
              <Button variant="contained" onClick={()=>dispatch(Buycake(num))} className="Buy_btn">Buy {num} cake</Button>
          </div>
        </>
    )
}

export default Multicakebuy;