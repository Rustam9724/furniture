import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Decorations() {
    const [slideNumber, setSliderNumber] = useState(0);
    const [productNumber, setProductNumber] = useState(0);
    const [seconds, setSeconds] = useState(34642);

    // Слайдер
    let points = {
        startPoint: null,
        finishPoint: null,
    }

    function setStartPoint(e, direction) {
        if (direction === 'X') {
            points.startPoint = e.changedTouches[0].clientX;
        } else {
            points.startPoint = e.changedTouches[0].clientY;
        }
    }
    
    function setSliderFinishPoint(e) {
        points.finishPoint = e.changedTouches[0].clientX;
        let pointsDifference = points.startPoint - points.finishPoint

        if (Math.abs(pointsDifference) >= 20) {
            if (pointsDifference < 0) {
                if (slideNumber > 0) {
                    setSliderNumber(slideNumber - 1);
                }
            } else {
                if (slideNumber < 3) {
                    setSliderNumber(slideNumber + 1)
                }
            }
        }
    }

    const carouselItemStyle = {
        marginLeft: `${slideNumber * -28}%`,
    }

    function setProductsFinishPoint(e) {
        points.finishPoint = e.changedTouches[0].clientY;
        let pointsDifference = points.startPoint - points.finishPoint

        if (Math.abs(pointsDifference) >= 20) {
            if (pointsDifference < 0) {
                if (productNumber > 0) {
                    setProductNumber(productNumber - 1);
                }
            } else {
                if (productNumber < 2) {
                    setProductNumber(productNumber + 1)
                }
            }
        }
    }

    const productsItemStyle = {
        marginTop: `${productNumber * -36}%`,
    }

    // Таймер
    useEffect(() => {
        setTimeout(() => {
            setSeconds(seconds - 1)
        }, 1000)
    })

    let time = {
        hours:  `${Math.trunc(seconds/3600)}`,
        minutes: 
            Math.trunc((seconds - Math.trunc(seconds/3600)*3600)/60) < 10 ? `0${Math.trunc((seconds - Math.trunc(seconds/3600)*3600)/60)}` : `${Math.trunc((seconds - Math.trunc(seconds/3600)*3600)/60)}`,
        seconds: 
            seconds-Math.trunc(seconds/60)*60 < 10 ? `0${seconds-Math.trunc(seconds/60)*60}` : `${seconds-Math.trunc(seconds/60)*60}`
    }

    return (
        <section className="decorations">
            <div className="decorations__container _container">
                <div className="decorations__header">
                    <label className="decorations__search">
                        <input type="text" placeholder="Search product..."/>
                    </label>
                    <div className="decorations__notififications">
                        <img src="./assets/images/notifications.svg" alt="" />
                    </div>
                </div>
                <div className="notifications__title-block">
                    <h1 className="notifications__title">Find the unique decorations for your home</h1>
                    <img src="./assets/images/candle.svg" alt="" />
                </div>
                <div className="notifications__carousel" onTouchStart={e => setStartPoint(e, 'X')} onTouchEnd={e => setSliderFinishPoint(e)}>
                    <div 
                        className={`notifications__carousel__item ${slideNumber === 0 && 'notifications__carousel__item_active'}`}
                        style={carouselItemStyle}
                    >
                        <p>All</p>
                    </div>
                    <div className={`notifications__carousel__item ${slideNumber === 1 && 'notifications__carousel__item_active'}`}>
                        <svg width="48" height="33" viewBox="0 0 48 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44.4 14.1429C42.4125 14.1429 40.8 15.7266 40.8 17.6786V23.5715H7.2V17.6786C7.2 15.7266 5.58825 14.1429 3.6 14.1429C1.61175 14.1429 0 15.7266 0 17.6786V31.8215C0 32.4697 0.5373 33 1.2 33H6C6.6627 33 7.1325 32.4723 7.1325 31.8215L7.2 30.6429H40.8V31.8215C40.8 32.4723 41.3373 33 42 33H46.8C47.4627 33 48 32.4723 48 31.8215V17.6786C48 15.7266 46.3875 14.1429 44.4 14.1429ZM9.6 17.6786V21.2143H38.4V17.6786C38.4 14.8331 40.4648 12.4524 43.2 11.9051V9.4286C43.2 4.22153 38.9018 3.05176e-05 33.6 3.05176e-05H14.3325C9.03075 3.05176e-05 4.7325 4.22153 4.7325 9.4286L4.8 11.9036C7.5375 12.4561 9.6 14.8353 9.6 17.6786Z" fill="white" fillOpacity="0.6"/>
                        </svg>
                    </div>
                    <div className={`notifications__carousel__item ${slideNumber === 2 && 'notifications__carousel__item_active'}`}>
                        <svg width="40" height="46" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_51_269)">
                            <path d="M39.7409 30.4211L38.4222 27.5461C37.9552 26.5309 36.9374 25.875 35.8213 25.875H4.17488C3.06059 25.875 2.04809 26.5309 1.58024 27.5461L0.261488 30.4211C-0.145922 31.3111 -0.0747618 32.3501 0.449792 33.1757C0.974345 34.0014 1.88292 34.5 2.77667 34.5L2.77675 44.5625C2.77675 45.3564 3.4164 46 4.20533 46H7.06247C7.85157 46 8.49104 45.3564 8.49104 44.5625V34.5H31.3482V44.5625C31.3482 45.3564 31.9878 46 32.7767 46H35.5535C36.3426 46 36.9821 45.3564 36.9821 44.5625L37.1427 34.5C38.1168 34.5 39.0249 34.0003 39.549 33.1748C40.0731 32.3493 40.1427 31.3106 39.7409 30.4211ZM9.91952 11.5C9.91952 8.85144 11.3659 6.63948 13.4909 5.31249V23H17.7767L17.7775 4.31253H22.0632L22.0624 23H26.3481L26.3489 5.3098C28.5534 6.55862 29.9195 8.85144 29.9195 11.5L29.9187 23H34.2071L34.206 11.5C34.206 5.14898 29.089 3.05176e-05 22.7774 3.05176e-05H17.0624C10.8302 3.05176e-05 5.71238 5.14898 5.71238 11.5L5.71379 23H9.99682L9.91952 11.5Z" fill="white" fillOpacity="0.6"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_51_269">
                            <rect width="40" height="46" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className={`notifications__carousel__item ${slideNumber === 3 && 'notifications__carousel__item_active'}`}>
                        <svg width="40" height="63" viewBox="0 0 40 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.4498 19.6875H10.546C6.40854 19.6875 2.95354 22.7883 2.57854 26.8489L0.0335405 54.4114C-0.392584 59.0256 3.29604 63 8.00104 63H31.8885C36.5923 63 40.281 59.0244 39.856 54.4126L37.311 26.8501C37.0498 22.7883 33.5873 19.6875 29.4498 19.6875ZM19.8873 51.1875C15.5873 51.1875 11.9998 47.9514 11.9998 43.9647C11.9998 40.8885 16.7598 34.6783 18.9373 31.9959C19.4685 31.3423 20.531 31.3423 21.0623 31.9959C23.2373 34.6746 27.9998 40.8885 27.9998 43.9647C27.9998 47.9514 24.4123 51.1875 19.8873 51.1875ZM47.4123 11.5738L41.9973 6.24343C40.3873 4.76687 38.4623 3.93753 36.3498 3.93753H28.006C28.006 1.76329 26.2148 3.05176e-05 24.006 3.05176e-05H15.8873C13.6785 3.05176e-05 11.8873 1.76329 11.8873 3.93753L11.9998 15.75H27.9998L27.9998 11.8125H36.3435L41.7572 17.1417C42.5382 17.9105 43.8047 17.9105 44.586 17.1417L47.4135 14.3584C48.1998 13.5844 48.1998 12.3416 47.4123 11.5738Z" fill="white" fillOpacity="0.6"/>
                        </svg>
                    </div>
                </div>
                <div className="decorations__cards" onTouchStart={e => setStartPoint(e, 'Y')} onTouchEnd={e => setProductsFinishPoint(e)}>
                    <Link className={`decorations__card ${productNumber === 0 && 'decorations__card_active'}`} to="/desk-lamp" style={productsItemStyle}>
                        <div className={productNumber === 0 && `active-card__wrapper`}>
                            <div className="decoraions__card__promotion promotion">
                                <p>Promotion of the day</p>
                                <div className="promotion__timer">
                                    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.4615 0C11.1849 0 11.7692 0.559766 11.7692 1.25C11.7692 1.94023 11.1849 2.5 10.4615 2.5H9.80769V3.8457C11.3401 4.07031 12.7377 4.6875 13.882 5.58594L14.7688 4.74219C15.2796 4.25391 16.105 4.25391 16.6159 4.74219C17.1267 5.23047 17.1267 6.01953 16.6159 6.50781L15.631 7.45313C16.4974 8.72266 17 10.2422 17 11.875C17 16.3633 13.1954 20 8.5 20C3.80457 20 0 16.3633 0 11.875C0 7.8125 3.11885 4.44531 7.19231 3.8457V2.5H6.53846C5.81514 2.5 5.23077 1.94023 5.23077 1.25C5.23077 0.559766 5.81514 0 6.53846 0H10.4615ZM9.48077 7.5C9.48077 6.98047 9.04351 6.5625 8.5 6.5625C7.95649 6.5625 7.51923 6.98047 7.51923 7.5V12.5C7.51923 13.0195 7.95649 13.4375 8.5 13.4375C9.04351 13.4375 9.48077 13.0195 9.48077 12.5V7.5Z" fill="white" fillOpacity="0.8"/>
                                    </svg>
                                    <p>{time.hours}:{time.minutes}:{time.seconds}</p>
                                </div>
                            </div>
                            <div className="decorations__card__main">
                                <div className="decoraitions__card__image">
                                    <img src="./assets/images/lamp.svg" alt="" />
                                </div>
                                <div className="decorations__card__description dec-description">
                                    <h2 className="dec-description__title">Desk Lamp</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <div className="dec-description__price">$34.99 $23.99</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link className={`decorations__card ${productNumber === 1 && 'decorations__card_active'}`} to="/desk-lamp">
                        <div className={productNumber === 1 && `active-card__wrapper`}>
                            <div className="decorations__card__main">
                                <div className="decoraitions__card__image">
                                    <img src="./assets/images/candle-set.svg" alt="" />
                                </div>
                                <div className="decorations__card__description dec-description">
                                    <h2 className="dec-description__title">Set of Candles</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <div className="dec-description__price">$8.99</div>
                                    <div className="dec-description__price">🍃eco-friendly</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link className={`decorations__card ${productNumber === 2 && 'decorations__card_active'}`} to="/desk-lamp">
                        <div className={productNumber === 2 && `active-card__wrapper`}>
                            <div className="decorations__card__main">
                                <div className="decoraitions__card__image">
                                    <img src="./assets/images/clock.svg" alt="" />
                                </div>
                                <div className="decorations__card__description dec-description">
                                    <h2 className="dec-description__title">Alarm Clock</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <div className="dec-description__price">$8.99</div>
                                    <div className="dec-description__price">🍃eco-friendly</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
                <Footer />
        </section>
    )
}

export default Decorations;