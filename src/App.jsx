import { useState } from 'react';
import Logo from "./assets/instagram-text-logo.png";
import './App.css';

function App() {
  let login = (<main className="flex justify-center flex-col" >
    <input className="text-center border p-[5px] m-[5px] border-gray-400" type="text" placeholder="Phone number, username or email" />
    <input className="text-center border p-[5px] m-[5px] border-gray-400" type="password" placeholder="Password" />
    <button className="bg-[#4cb5f9] my-[10px] py-[5px]" >Login</button>
    <p className="text-white" >Don't have an account? <a className=" text-[#4cb5f9] cursor-pointer " onClick={() => changetoSignUp()}>Sign Up</a> </p>
  </main>)

  let signup = (<main className="flex justify-center flex-col" >
    <input className="text-center border p-[5px] m-[5px] border-gray-400" type="text" placeholder="Mobile number or email" />
    <input className="text-center border p-[5px] m-[5px] border-gray-400" type="text" placeholder="Full Name" />
    <input type="password" className="text-center border p-[5px] m-[5px] border-gray-400" placeholder="Password" />
    <input type="password" className="text-center border p-[5px] m-[5px] border-gray-400" placeholder="Confirm Password" />
    <button className="bg-[#4cb5f9] my-[10px] py-[5px]" >Sign Up</button>
    <p className="text-white" >Already have an account? <a className=" text-[#4cb5f9] cursor-pointer " onClick={() => changetoLogin()}>Login</a> </p>
  </main>)

  const changetoSignUp = () => setInput(signup);
  const changetoLogin = () => setInput(login);

  const [input, setInput] = useState(login)

  return (
    <div className="flex justify-center">
      <div >
        <img src={Logo} className="w-[400px] my-[100px] filter invert " />
        {input}
      </div>
    </div>
  )
}

export default App