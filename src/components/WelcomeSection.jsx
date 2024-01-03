import { Link } from "react-router-dom"

function WelcomeSection() {
    return (
        <section class="welcome-section">
            <div class="welcome-section__container _container">
                <h1 class="welcome-section__title">Welcome</h1>
                <div class="welcome__discounts discounts">
                    <h2 class="discounts__title">Discounts for new users</h2>
                    <p class="discounts__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button class="discounts__button">Read More</button>
                </div>
                <div class="wellcome-section__main">
                    <div class="wellcome-carousel">
                        <div class="welcome-carousel__radio">
                            <input type="radio" name="welcome-carousel" checked hidden/>
                            <label></label>
                            <input type="radio" name="welcome-carousel" hidden/>
                            <label></label>
                            <input type="radio" name="welcome-carousel" hidden/>
                            <label></label>
                        </div>
                        <div class="welcome-carousel__body">
                            <div class="welcome-carousel__item">
                                <h3 className="welcome-carousel__item__title">Find The Best Things For Your House!</h3>
                                <p class="welcome-carousel__item__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                </p>
                            </div>
                            <div class="welcome-carousel__item">
                                <h3 class="welcome-carousel__item__title">Find The Best Things For Your House! </h3>
                                <p class="welcome-carousel__item__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                </p>
                            </div>
                            <div class="welcome-carousel__item">
                                <h3 class="welcome-carousel__item__title">Find The Best Things For Your House! </h3>
                                <p class="welcome-carousel__item__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link class="weclome-section__button button" to="/sign-in">
                        <p>Get started</p>
                        <div>
                            &#62;
                        </div>
                    </Link>
                    <p class="welcome-section__have-account">Already have an account? <a href="#">Sign in</a></p>
                </div>
            </div>
        </section>
    )
}

export default WelcomeSection