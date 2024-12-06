import React,{useState,useEffect} from 'react'

export default function About() {
  const [opacity, setOpacity] = useState(0);

useEffect(() => {
 setOpacity(0);
 // Trigger opacity change to 1 after a delay
 const timeoutId = setTimeout(() => {
  setOpacity(1);
 
}, 100); // Small delay to ensure transition works
return () => clearTimeout(timeoutId);
 
}, [])

  
  return (
    <>  <section id="welcome-section">
    <div id="About" style={{opacity:opacity,transition:"2s ease"}}>
      <h1>Hey I am Amna Ihsan</h1>
      <p>A Front-End Web developer</p>
    </div>
  </section>
  </>
  )
}
