import Link from 'next/link'
export default function Home(){
  return (
    <div style={{padding:'40px',color:'white',background:'#0d0f18',fontFamily:'sans-serif'}}>
      <h1 style={{fontSize:'42px',marginBottom:'20px'}}>Patentra</h1>
      <p>Connecting Inventors, Attorneys, and Companies globally.</p>
      <div style={{marginTop:'20px'}}>
        <Link href="/signup">Get Started</Link>
      </div>
    </div>
  )
}
