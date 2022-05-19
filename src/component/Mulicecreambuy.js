import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Buyicecream } from '../redux/icecream/icecreamaction';

const Mulicecreambuy =() => {
    const [num,setnum] = useState("");
    const changehandler = (event) =>{
        setnum(event.target.value);
    }

    const numofIcecream = useSelector((state) =>state.iceCream.numofIcecream);
    const dispatch = useDispatch();
    return(
        <>
          <div className="div_block">
              <h2>num of Remaining Ice Cream:{numofIcecream}</h2>
              <Input type="text" placeholder="Buy ice cream" value={num} onChange={changehandler} />
              <Button variant="contained" onClick={()=>dispatch(Buyicecream(num))} className="Buy_btn">Buy {num} Ice cream</Button>
          </div>
        </>
    )
}

export default Mulicecreambuy;