import Link from "next/link"

export default function Header(){
    return(
        <div>
            <div className="center">
             
                <ul className="flex bg-[midnightblue] center text-white h-11 justify-center items-center space-x-8">
                     
                <Link href={"/"}> <li>Home</li></Link>
                <Link href={"./contact"}> <li>Contact</li></Link>
                <Link href={"./about"}> <li>About</li></Link>
                <Link href={"./education"}> <li>Education</li></Link>
             
                    
                </ul>
                
            </div>
        </div>
    )
}