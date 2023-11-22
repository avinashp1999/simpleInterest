import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle,setPrinciple]=useState(0);
  const [interest,setInterest]=useState(0);
  const [rate,setRate]=useState(0);
  const [year,setYear]=useState(0);
  
  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log('===principle amount===')
  console.log(principle)
  console.log('======rate=======')
  console.log(rate)
  console.log('======Year=======')
  console.log(year)
  let result=principle*year*rate/100;
  console.log(result);
  setInterest(result);
  }
  function clearValues(){
    setPrinciple(0);
    setInterest(0);
    setRate(0);
    setYear(0);
  }
  return (
    <div className="d-flex justify-content-center align-items-center mt-5"
    >
      <div style={{ width: "400px" }} className='bg-light  p-5 rounded justify-content-center align-items-center '>
        <h3 >Simple Interest</h3>
        <p>calculate your simple interest easily</p>
        <div style={{ height: "150px" }} className=" flex-column mt-4 bg-warning d-flex justify-content-centere align-items-center w-100 rounded p-5">
          <h3>{'\u20B9'}{interest}</h3>
          <p>Total Simple  Interest</p>


        </div>
        <form action="" className='mt-5'onSubmit={handlesubmit}>
          <div className='mb-2'>
            <TextField onChange={(e)=>setPrinciple(e.target.value)}  value={principle} id="outlined-basic" label="Principal Amount" variant="outlined" className='w-100' />
          </div>
          <div className='mb-2'>
            <TextField onChange={(e)=>setRate(e.target.value)} value={rate} id="outlined-basic" label="Rate of interest (pa)%" variant="outlined" className='w-100' />
          </div>
          <div className='mb-5'>
            <TextField onChange={(e)=>setYear(e.target.value)} value={year} id="outlined-basic" label="Year" variant="outlined" className='w-100' />
          </div>
          <div className='mt-5'>
            <Stack direction="row" spacing={2}>
            <Button style={{height:'50px',width:'200px'}} variant="contained" className='bg-success' type='submit'>Calculate</Button>
            <Button onClick={clearValues} style={{height:'50px',width:'200px', color:'blue'}} variant="contained" className='bg-light'>Reset</Button>
            </Stack>

          </div>


        </form>

      </div>

    </div>
  );
}

export default App;
