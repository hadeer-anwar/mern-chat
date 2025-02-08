import { useState } from "react"

const Register = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className="bg-blue-50 h-screen flex items-center">
        <form className="w-64 mx-auto mb-12">
          <input type="text" 
                 placeholder="username" 
                 value={username} 
                 onChange={e=> setUserName(e.target.value)} 
                 className="block w-full rounded-sm p-2 mb-2 border"/>
          <input type="password" 
                 placeholder="password" 
                 value={password} 
                 onChange={e=>setPassword(e.target.value)} 
                 className="block w-full rounded-sm p-2 mb-2 border" />
          <button className="bg-blue-500 text-white block w-full rounded p-2">
             Register
          </button>
        </form>
    </div>
  )
}

export default Register