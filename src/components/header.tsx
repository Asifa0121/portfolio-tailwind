import Link from "next/link"

export default function Header(){
    return(
        <div className="HeaderBody">
            <div className="Header">
            
                <ul className="HeaderList">
                    
                <Link href={"/"}> <li>Home</li></Link>
                <Link href={"./contact"}> <li>Contact</li></Link>
                <Link href={"./about"}> <li>About</li></Link>
                <Link href={"./education"}> <li>Education</li></Link>
             
                    
                </ul>
                
            </div>
        </div>
    )
}