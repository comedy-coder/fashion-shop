import Phone from  "../assets/images/phone.png"
import Email from "../assets/images/email.png"
import Address from "../assets/images/address.png"
import "../sass/components/contact.css"
import {useRef,useState} from "react"
import emailjs from "emailjs-com";

import React from "react"

function Contact() {
    const formRef = useRef()
    const [done,setDone] = useState(false)
    const handleSubmit = (e) =>
    {
            e.preventDefault()
            emailjs.sendForm("service_jbt35ri", "template_4ejhww8", formRef.current, "user_nCp3SFVK9yHvEkuyuBUiC")
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            }); 
    }
    return (
        <div className = "c">
            <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Let's discuss your proccess</h1>
                        <div className="c-info">
                            <div className="c-info-item"> 
                            <img
                             src={Phone} 
                             
                             alt= ""
                             className = " c-icon"
                             />
                                 +0762534501               
                             </div>
                             <div className="c-info-item"> 
                            <img
                             src={Email} 
                             
                             alt= ""
                             className = " c-icon"
                             />
                                 thanhdat.ngo1407@gmail.com               
                             </div>
                             <div className="c-info-item"> 
                            <img
                             src={Address} 
                             
                             alt= ""
                             className = " c-icon"
                             />
                                 71/67 Điện Biên phủ phường 15 quận Bình Thạnh Tp Hồ Chí Mnh              
                             </div>
                             
                    </div>
                  </div>           
                   
                    <div className="c-right">
                        < p className = "c-desc">
                            <b>What's your story</b> Get in touch. Aways avaliable for freelancing if the right procject comes a long 
                        </p>
                    <form ref={formRef} onSubmit = {handleSubmit}>
                        <input style={{backgroundColor : "#333"}} placeholder ="Name"   name ="user_name" type ="text" />
                        <input style={{backgroundColor :  "#333"}} placeholder ="Subject"   name ="user_subject" type ="text" />
                        <input style={{backgroundColor :  "#333"}} placeholder ="Email"   name ="user_email" type ="text" />
                        <textarea style={{backgroundColor :  "#333"}} rows="5" placeholder="Message" name = "message" />
                        <button >Submit </button> 
                        {done && "Thank you ..."}
                    </form>
                    </div>
                </div>
            </div>
        
        
    )
}

export default Contact
