import './Contact.css';

function Contact()
{
    return(
     <>
       {/* Contact Start */}
       <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* column ko 12 kra h pehle 6 tha  */}
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: " 400px" }}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src="assets/img/about.jpg" alt="" style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h1>Welcome To Contact Page</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
     </> 
 
)
} 
export default Contact;

