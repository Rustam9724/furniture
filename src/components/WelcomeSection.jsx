import { Link } from "react-router-dom"
import { useState } from "react";

function WelcomeSection() {
    const [slideNumber, setSliderNumber] = useState(0);
    let points = {
        startPoint: null,
        finishPoint: null
    }

    function setStartPoint(e) {
        points.startPoint = e.changedTouches[0].clientX;
    }

    function setFinishPoint(e) {
        points.finishPoint = e.changedTouches[0].clientX;
        let pointsDifference = points.startPoint - points.finishPoint

        if (Math.abs(pointsDifference) >= 20) {
            if (pointsDifference < 0) {
                if (slideNumber > 0) {
                    setSliderNumber(slideNumber - 1);
                }
            } else {
                if (slideNumber < 2) {
                    setSliderNumber(slideNumber + 1)
                }
            }
        }
    }

    const carouselItemStyle = {
        marginLeft: `${slideNumber * -100}%`,
    }

    return (
        <section className="welcome-section">
            <div className="welcome-section__container _container">
                <h1 className="welcome-section__title">Welcome</h1>
                <div className="welcome__discounts discounts">
                    <h2 className="discounts__title">Discounts for new users</h2>
                    <p className="discounts__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="discounts__button">Read More</button>
                </div>
                <div className="wellcome-section__main">
                    <div className="wellcome-carousel">
                        <div className="welcome-carousel__radio">
                            <input type="radio" name="welcome-carousel" hidden checked={slideNumber === 0}/>
                            <label></label>
                            <input type="radio" name="welcome-carousel" hidden checked={slideNumber === 1}/>
                            <label></label>
                            <input type="radio" name="welcome-carousel" hidden checked={slideNumber === 2}/>
                            <label></label>
                        </div>
                        <div className="welcome-carousel__body" onTouchStart={(e) => setStartPoint(e)} onTouchEnd={e => setFinishPoint(e)}>
                            <div className="welcome-carousel__item" style={carouselItemStyle}>
                                <h3 className="welcome-carousel__item__title">Find The Best Things For Your House!</h3>
                                <p className="welcome-carousel__item__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                </p>
                            </div>
                            <div className="welcome-carousel__item">
                                <h3 className="welcome-carousel__item__title">Find The Best Things For Your House!</h3>
                                <p className="welcome-carousel__item__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                </p>
                            </div>
                            <div className="welcome-carousel__item">
                                <h3 className="welcome-carousel__item__title">Find The Best Things For Your House!</h3>
                                <p className="welcome-carousel__item__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link className="weclome-section__button button" to="/sign-in">
                        <p>Get started</p>
                        <div>
                            &#62;
                        </div>
                    </Link>
                    <p className="welcome-section__have-account">Already have an account? <a href="#">Sign in</a></p>
                </div>
            </div>
        </section>
    )
}

export default WelcomeSection