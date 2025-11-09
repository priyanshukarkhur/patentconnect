import { useState } from 'react'
export default function Signup(){
  const [role,setRole]=useState('inventor')
  return (
    <div style={{padding:'40px',color:'white',background:'#0d0f18'}}>
      <h1>Sign Up - Patentra</h1>
      <p>Select Role:</p>
      <select value={role} onChange={e=>setRole(e.target.value)}>
        <option value="inventor">Inventor</option>
        <option value="attorney">Attorney</option>
        <option value="company">Company / Organization</option>
      </select>
      <p>Full signup form and Firebase auth will be configured during deployment.</p>
    </div>
  )
}
