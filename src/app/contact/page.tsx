import Link from "next/link";

export default function Home(){
    return(
        <div>
            <div className="contact">
                <div className="contctBody">
                  <b>  Email:</b> <Link href={"irhafatima0106@gmail.com"}> irhafatima0106@gmail.com</Link><br/><br/>
                    <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/asifa-majeed-b2530b2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">www.linkedIn.com</a><br/><br/>
                    <b>Phone:</b> 03168311473 <br/><br/>
                    <b>WhatsApp:</b> 03168311473<br/><br/>
                </div>
            </div>
        </div>
    )
}