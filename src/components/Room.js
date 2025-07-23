import React from 'react';
import './room.css';
import { NavLink } from 'react-router-dom';

function Room() {
    return (
        <>
            <div className="heroo">
                <img 
                    alt="A modern hotel room with a bed, sofa, and a table" 
                    height="400" 
                    src="https://storage.googleapis.com/a1aa/image/UGYvD1nrr0YiLdNbIhY70Sjxtaf7rVgUXIK6yKF0ovFSEn4JA.jpg" 
                    width="1200" 
                />
                <div className="heroo-text">
                    <h1>Our Rooms</h1>
                    <div>
                        <NavLink className='original-button1' to={'/'}>
                            RETURN HOME
                        </NavLink>  
                    </div>
                </div>
            </div>
            <div id="demo" className="carousel slide" data-ride="carousel" data-interval="2000">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                    <li data-target="#demo" data-slide-to="3"></li>
                </ul>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://img.freepik.com/free-photo/luxury-bedroom-interior-with-rich-furniture-scenic-view-from-walkout-deck_1258-111483.jpg?t=st=1734502793~exp=1734506393~hmac=50f3ed818722bc689e55a88b650a63742e76da5bc37506cba9b929b28504a39a&w=900" alt="Luxury bedroom interior" style={{ width: '100%', height: '500px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/3d-rendering-luxury-bedroom-suite-resort-hotel-with-twin-bed-living_105762-2018.jpg?t=st=1734503010~exp=1734506610~hmac=2e55d990d735081b13f586fba9f2835a55173cdf877c76525cf868f06e74c6aa&w=996" alt="Luxury bedroom suite" style={{ width: '100%', height: '500px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://img.freepik.com/free-photo/view-romantic-castle-bedroom_23-2150844387.jpg?t=st=1734503101~exp=1734506701~hmac=9f64b7e085e6bf395d9ef9018bef9c2a4d46f50f57044a164656b3f439420bfc&w=1380" alt="Romantic castle bedroom" style={{ width: '100%', height: '500px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/736x/b1/5f/25/b15f257289f1d06d0e4dd4fc332de429.jpg" alt="Elegant hotel room" style={{ width: '100%', height: '500px' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://e0.pxfuel.com/wallpapers/723/1013/desktop-wallpaper-phuket-ocean-view-hotel-teahub-io-phuket-thailand-thumbnail.jpg" alt="Ocean view hotel" style={{ width: '100%', height: '500px' }} />
 </div>
                </div>

                <a className="carousel-control-prev" href="#demo" data-slide="prev" aria-label="Previous">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next" aria-label="Next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </>
    );
}

export default Room;