import "./OrderPageStyles.css"
import {useRef} from 'react'
import emailjs from '@emailjs/browser';


function OrderPage() {

        const form = useRef()

        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs
              .sendForm('service_shuptn2', 'template_os099hg', form.current, {
                publicKey: 'nO346mGiW2YRMUfRJ',
              })
              .then(
                () => {
                  console.log('SUCCESS!');
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
              );
              e.target.reset();
          };
    return(
        <div className="form-container">
            <h1>Interested... Submit a free consulation request</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Full Name" name="user_name" required/>
                <input type="email" placeholder="Email" name="user_email" required/>
                <input type="text" placeholder="Location" name="location" required/>
                <textarea name="message" placeholder="Additional Information" rows="4"></textarea>
                <button type="submit">Submit Consulation Request</button>
            </form>
        </div>
    )
}

export default OrderPage;