import './Banner.css';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SubNav from '../SubNavComponent/SubNav';
function Banner() {
    const navigate = useNavigate();
    const location = useLocation();
    const villas = [
        {
            id: 1,
            name: 'Tuli Veer Bagh',
            description: 'A stunning villa with breathtaking ocean views, perfect for a relaxing getaway.',
            imageUrl: './assets/VillaImage/villa1/viewroom.jpg', // Replace with actual image URLs
            price: '$250/night',
            facilities: ['Free Wi-Fi', 'Swimming Pool', 'Air Conditioning'],
            meals: ['Breakfast included', 'Lunch and Dinner available'],
            reviews: [
                { rating: 5, comment: 'Amazing experience! Highly recommend.' },
                { rating: 4, comment: 'Beautiful villa, but a bit pricey.' },
            ],
        },
        {
            id: 2,
            name: 'Mountain Retreat',
            description: 'A cozy villa nestled in the mountains, ideal for nature lovers and adventure seekers.',
            imageUrl: './assets/VillaImage/villa2/villa-2.jpg', // Replace with actual image URLs
            price: '$250/night',
            facilities: ['Free Wi-Fi', 'Swimming Pool', 'Air Conditioning'],
            meals: ['Breakfast included', 'Lunch and Dinner available'],
            reviews: [
                { rating: 5, comment: 'Amazing experience! Highly recommend.' },
                { rating: 4, comment: 'Beautiful villa, but a bit pricey.' },
            ],
        },
        {
            id: 3,
            name: 'Luxury Beachfront Villa',
            description: 'Experience luxury living in this beautiful beachfront villa with private access to the beach.',
            imageUrl: './assets/VillaImage/villa3/villa-3.jpg', // Replace with actual image URLs
            price: '$250/night',
            facilities: ['Free Wi-Fi', 'Swimming Pool', 'Air Conditioning'],
            meals: ['Breakfast included', 'Lunch and Dinner available'],
            reviews: [
                { rating: 5, comment: 'Amazing experience! Highly recommend.' },
                { rating: 4, comment: 'Beautiful villa, but a bit pricey.' },
            ],
        },
        {
            id: 4,
            name: 'Modern Family Villa',
            description: 'A spacious villa designed for families, featuring a large garden and play area for kids.',
            imageUrl: './assets/VillaImage/villa4/villa-4.jpg', // Replace with actual image URLs
            price: '$250/night',
            facilities: ['Free Wi-Fi', 'Swimming Pool', 'Air Conditioning'],
            meals: ['Breakfast included', 'Lunch and Dinner available'],
            reviews: [
                { rating: 5, comment: 'Amazing experience! Highly recommend.' },
                { rating: 4, comment: 'Beautiful villa, but a bit pricey.' },
            ],
        },
    ];

    const [BannerContent, setBannerContent] = useState();

    useEffect(() => {
        setInterval(() => {
            // if (localStorage.getItem('role') == "admin" || localStorage.getItem('role') == "user") 
            if (location.pathname === '/home') {
                setBannerContent(
                    <>
                        {/* Carousel Start */}
                        <div className="container-fluid p-0" style={{ position: 'relative' }}>
                            <div id="header-carousel" className="carousel slide  carousel-fade" data-bs-ride="carousel" data-interval="1000">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                       
                                            <img className="w-100" style={{ width: "100%", height: "600px" }} src="./assets/VillaImage/villa1/villa-1.jpg" alt="Image" />
                                           

                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                                                }}
                                            />

                                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" >
                                            <div className="p-3" style={{ maxWidth: "900px", paddingTop: "50px" }}>
                                                <h5 className=" text-uppercase mb-3 animated slideInDown" style={{ color: "white" }}>Design Features</h5>
                                                <h1 style={{ color: "white" }} className="display-3 animated slideInDown mb-4">Villa Project Vision & Goals</h1>
                                                <p style={{ color: "white" }} className="fs-5 fw-medium  mb-4 pb-2">"Experience luxury living with our thoughtfully designed villa that blends elegance and comfort."</p>
                                                <a onClick={() => navigate('./about')} className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                                <a className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">

                                        <div style={{ position: "relative" }}>

                                            <img className="w-100" style={{ height: "600px" }} src="./assets/VillaImage/villa2/outdoor.jpg" alt="Image" />

                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                                                }}
                                            />
                                        </div>

                                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                            <div className="p-3" style={{ maxWidth: "900px" }}>
                                                <h5 className=" text-uppercase mb-3 animated slideInDown" style={{ color: "white" }}>Sustainability Practices</h5>
                                                <h1 className="display-3  animated slideInDown mb-4" style={{ color: "white" }}>Innovative Design & Architecture</h1>
                                                <p className="fs-5 fw-medium  mb-4 pb-2" style={{ color: "white" }}>"Embrace sustainability with eco-friendly materials and energy-efficient solutions for a greener future."</p>
                                                <a className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                                <a className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">

                                        <div style={{ position: "relative" }}>

                                            <img className="w-100" style={{ height: "600px", objectFit: 'cover' }} src="./assets/VillaImage/villa4/villa-4.jpg" alt="Image" />

                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                                                }}
                                            />
                                        </div>

                                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                            <div className="p-3" style={{ maxWidth: "900px", objectFit: 'cover' }}>
                                                <h5 style={{ color: "white" }} className=" text-uppercase mb-3 animated slideInDown">Community Engagement</h5>
                                                <h1 style={{ color: "white" }} className="display-3  animated slideInDown mb-4">Implementation and Development Timeline</h1>
                                                <p style={{ color: "white" }} className="fs-5 fw-medium  mb-4 pb-2">"Join us in creating a vibrant community where modern living meets nature's tranquility."</p>
                                                <a className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                                <a className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        {/* Carousel End */}
                        <div className="user-home-container">
                            <h2>Welcome to <span style={{ color: "#86B817" }}>My</span>Villa</h2>
                            <p className="welcome-message">
                                Discover our exclusive selection of luxurious villas that cater to all your needs. Whether you're looking for a romantic escape or a family vacation, we have the perfect villa for you.
                            </p>
                            <div className="villas-gallery">
                                {villas.map(villa => (
                                    <div key={villa.id} className="villa-card">
                                        <img src={villa.imageUrl} alt={villa.name} className="villa-image" />
                                        <h3>{villa.name}</h3>
                                        <p>{villa.description}</p>
                                        <div className="stars">{'★'.repeat(villa.rating)}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="about-section">
                                <h3>About Our Villas</h3>
                                <p>Our villas are designed to provide you with the ultimate comfort and luxury. Each villa is uniquely styled and equipped with modern amenities to ensure a memorable stay.</p>
                            </div>

                            <div className="facilities-section">
                                <h3>Facilities</h3>
                                <ul>
                                    <li>Free Wi-Fi</li>
                                    <li>Swimming Pool</li>
                                    <li>Air Conditioning</li>
                                    <li>24/7 Security</li>
                                    <li>Parking Space</li>
                                </ul>
                            </div>

                            <div className="meals-section">
                                <h3>Meals</h3>
                                <ul>
                                    <li>Breakfast included</li>
                                    <li>Lunch and Dinner available</li>
                                    <li>Special dietary options available upon request</li>
                                </ul>
                            </div>

                            <div className="review-section">
                                <h3>Customer Reviews</h3>
                                <div className="review">
                                    <span className="stars">★★★★★</span>
                                    <p>"Amazing experience! Highly recommend."</p>
                                </div>
                                <div className="review">
                                    <span className="stars">★★★★</span>
                                    <p>"Beautiful villa, but a bit pricey."</p>
                                </div>
                            </div>

                            <div className="contact-section">
                                <h3>Contact Us</h3>
                                <p>Email: support@villabooking.com</p>
                                <p>Phone: +1 (234) 567-8901</p>
                            </div>
                        </div>
                    </>
                )
            }
            else {
                setBannerContent(
                    <>

                    </>
                )
            }
        }, 1)
    }, [])


    return (
        <>
            {
                BannerContent
            }

        </>

    )
}
export default Banner;
