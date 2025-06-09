import './About.css';

function About() {
    return (
        <>
            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* column ko 12 kra h pehle 6 tha  */}
                        {/* <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: " 400px" }}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src="assets/img/about.jpg" alt="" style={{ objectFit: "cover" }} />
                            </div>
                        </div> */}
                        <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="about-container">
            <h2>About Us</h2>
            <p className="about-description">
                Welcome to our Villa Booking System! We are dedicated to providing you with the best villa experience possible. Our mission is to offer a wide selection of luxurious villas that cater to all your needs, whether you're looking for a romantic getaway, a family vacation, or a business retreat.
            </p>
            <p className="about-description">
                With years of experience in the hospitality industry, we understand the importance of comfort and convenience. Our team works tirelessly to ensure that every villa meets our high standards of quality and service, so you can focus on making memories that last a lifetime.
            </p>
            <div className="about-values">
                <h3>Our Values</h3>
                <ul>
                    <li>Customer Satisfaction: We prioritize our guests' happiness and comfort.</li>
                    <li>Quality: We ensure that all our villas meet high standards of quality and cleanliness.</li>
                    <li>Integrity: We operate with transparency and honesty in all our dealings.</li>
                    <li>Community: We support local businesses and promote sustainable tourism.</li>
                    <li>Innovation: We continuously seek new ways to enhance your booking experience.</li>
                </ul>
            </div>
            <div className="about-mission">
                <h3>Our Mission</h3>
                <p>
                    Our mission is to create unforgettable experiences for our guests by providing exceptional service and a diverse range of luxurious villas. We strive to be the leading villa booking platform, connecting travelers with their dream accommodations.
                </p>
                <p>
                    We believe that every traveler deserves a unique and personalized experience. That's why we offer a variety of villas in stunning locations, each with its own charm and character. Whether you prefer a beachfront property or a secluded mountain retreat, we have something for everyone.
                </p>
            </div>
            <div className="contact-us">
                <h3>Contact Us</h3>
                <p>If you have any questions or need assistance, feel free to reach out to us:</p>
                <div className="contact-details">
                    <p><strong>Email:</strong> support@villabooking.com</p>
                    <p><strong>Phone:</strong> +91 987654321</p>
                    <p><strong>Message Us:</strong> <a href="mailto:support@villabooking.com" className="contact-link">Send a Message</a></p>
                </div>
            </div>
        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>

    )
}
export default About;

