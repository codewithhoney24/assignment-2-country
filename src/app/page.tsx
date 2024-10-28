
import Link from "next/link"

function Home() {
  return (
    <div>
      
<h1 >Country List</h1><br></br>


<h2><Link  href="/country/pakistan">Pakistan</Link></h2><br></br>

<h2 ><Link  href="/country/india">India</Link></h2><br></br>

<h2 ><Link  href="/country/germany">Germany</Link></h2><br></br>

<h2 ><Link  href="/country/japan">Japan</Link></h2><br></br>

<h2><Link  href="/country/australia"> Australia</Link></h2>


    </div>
  )
}

export default Home