import "./Contact.css"
export const Contact = () =>
{
     const handleSubmitBtn = (formData) =>
     {
       const formInputData = Object.fromEntries(formData.entries());
       console.log(formInputData);
     }

    return (<section className="contact-info">
        <h2 className="title">Contact Us</h2>

   <div className="container-wraper">
        <form action={handleSubmitBtn}>

         <input type="text"  className="form-control" required autoComplete="false" name="username"
          placeholder="Enter Your Name" />

          <input type="email" className="form-control" required autoComplete="false" name="email"
          placeholder="Enter Your Email" />

          <textarea rows="10"  className="form-control" required autoComplete="false" name="message"
          placeholder="Enter Your Message" ></textarea>
          
          <button type="submit" value="send">Send</button>

        </form>  
        </div>
        
    </section>)
}