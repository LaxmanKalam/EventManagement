import './User.css';

function User() {
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
    return (
        <>
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* column ko 12 kra h pehle 6 tha  */}
                        <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="user-home-container">
                                <h2>Welcome to <span style={{color:"#86B817"}}>My</span>Villa</h2>
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
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
        </>

    )
}
export default User;

