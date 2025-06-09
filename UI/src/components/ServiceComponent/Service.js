import './Service.css';

function Service() {
    // const services = [
    //     { id: 1, name: 'Room Booking', description: 'Book your favorite villa rooms easily.' },
    //     { id: 2, name: 'Pool Access', description: 'Enjoy our luxurious pools at your convenience.' },
    //     { id: 3, name: 'Free Wi-Fi', description: 'Stay connected with our complimentary Wi-Fi.' },
    //     { id: 4, name: '24/7 Customer Support', description: 'We are here to assist you anytime.' },
    //     { id: 5, name: 'Airport Transfer', description: 'Convenient transfers to and from the airport.' },
    // ];
    const services = [
        {
            id: 1,
            name: 'Room Booking',
            description: 'Book your favorite villa rooms easily. Choose from a variety of room types to suit your needs, whether it’s a cozy suite or a spacious family room.',
            features: ['Flexible cancellation', 'Instant confirmation', 'Best price guarantee']
        },
        {
            id: 2,
            name: 'Pool Access',
            description: 'Enjoy our luxurious pools at your convenience. Relax by the poolside or take a refreshing dip in our crystal-clear waters.',
            features: ['Heated pools', 'Poolside bar', 'Lounge chairs available']
        },
        {
            id: 3,
            name: 'Free Wi-Fi',
            description: 'Stay connected with our complimentary Wi-Fi. Perfect for both leisure and business travelers.',
            features: ['High-speed internet', 'Available in all areas', 'No additional charges']
        },
        {
            id: 4,
            name: '24/7 Customer Support',
            description: 'We are here to assist you anytime. Our dedicated team is available around the clock to ensure your stay is perfect.',
            features: ['Live chat support', 'Phone support', 'Email assistance']
        },
        {
            id: 5,
            name: 'Airport Transfer',
            description: 'Convenient transfers to and from the airport. Enjoy a hassle-free journey with our reliable transportation services.',
            features: ['Private cars', 'Meet and greet service', 'Affordable rates']
        },
    ];
    return (
        <>
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* column ko 12 kra h pehle 6 tha  */}

                        <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
                            {/* <div className="services-container">
                                <h2>Our Services</h2>
                                <div className="services-list">
                                    {services.map(service => (
                                        <div key={service.id} className="service-card">
                                            <h3>{service.name}</h3>
                                            <p>{service.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                            <div className="services-container">
                                <h2>Our Services</h2>
                                <div className="services-list">
                                    {services.map(service => (
                                        <div key={service.id} className="service-card">
                                            <h3>{service.name}</h3>
                                            <p>{service.description}</p>
                                            <ul>
                                                {service.features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
        </>

    )
}
export default Service;

