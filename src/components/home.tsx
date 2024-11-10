import Image from "next/image";
import profile from "@/Images/profile.png"

export default function Portfolio(){
    return(
        <div className="home">
            <div className="profile">
                Hello! I am <span className="asifa">Asifa</span> <br/>
                I am Next.js Developer
            </div>
            <div className="profileImage">
                <Image src={profile} alt="profile"/>
            </div>
        </div>
    )
}