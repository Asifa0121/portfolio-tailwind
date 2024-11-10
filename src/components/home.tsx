import Image from "next/image";
import profile from "@/Images/profile.png"

export default function Portfolio(){
    return(
        <div className="flex justify-between m-20 flex-wrap">
            <div className="text-2xl text-[midnightblue] font-bold py-17 m-24 font-serif ">
                Hello! I am <span className="asifa">Asifa</span> <br/>
                I am Next.js Developer
            </div>
            <div className="profileImage">
                <Image src={profile} alt="profile"/>
            </div>
        </div>
    )
}