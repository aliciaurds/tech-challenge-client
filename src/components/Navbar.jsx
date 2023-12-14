import { Link } from "react-router-dom"

function Navbar({phonesList}) {
  return (
    <div>
        <Link to = {"/"}>Home</Link>
        <nav>
            {phonesList.map((eachPhone)=>{
                return (
                    <Link to= {`/details/${eachPhone.id}`} key = {eachPhone.id}>
                        {eachPhone.name}
                     </Link>
                )
            })}
        </nav>
    </div>
  )
}

export default Navbar