import { useState } from "react";
import { Link } from "react-router-dom";

function SignUpSection() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownHeaderStyle = {
        width: '80px',
        height: '42px',
        borderRadius: isDropdownOpen ? '11px 11px 0 0' : '11px',
        background: 'rgba(31, 31, 31, 0.50)',
        display: 'flex',
        justifyContent: 'center',
        columnGap: '5px',
        alignItems: 'center'
    }

    const dropdownListStyle = {
        display: 'flex',
        flexDirection: 'column',
        display: isDropdownOpen ? 'block' : 'none',
        position: 'absolute',
    }

    const dropdownArrowStyle = {
        transform: isDropdownOpen ? 'rotate(180deg)' : 'unset',
        transition: 'all 0.2s ease-out'
    }

    return (
        <section className="sign-section sign-section__sign-up">
            <div className="sign-section__container _container">
                <div className="sign-section__header sign-section__header_sign-up">
                    <Link to="/sign-in">
                        <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="57" height="57" rx="16" fill="#474474" fill-opacity="0.6"/>
                            <path d="M20.9393 26.9393C20.3536 27.5251 20.3536 28.4749 20.9393 29.0607L30.4853 38.6066C31.0711 39.1924 32.0208 39.1924 32.6066 38.6066C33.1924 38.0208 33.1924 37.0711 32.6066 36.4853L24.1213 28L32.6066 19.5147C33.1924 18.9289 33.1924 17.9792 32.6066 17.3934C32.0208 16.8076 31.0711 16.8076 30.4853 17.3934L20.9393 26.9393ZM23 26.5H22V29.5H23V26.5Z" fill="white"/>
                        </svg>
                    </Link>
                    <h1 className="sign-section__title">Sign Up</h1>
                </div>
                <div className="sign-section__main sign-main sign-main_sign-up">
                    <h2 className="sign-main__title">Sign Up</h2>
                    <p className="sign-main__subtitle">You already have an account? <Link to="/sign-in">Sign in</Link></p>
                    <form>
                        <label htmlFor="" className="label label_email">
                            <input type="email" placeholder="Email adress"/>
                        </label>
                        <label htmlFor="" className="label label_name">
                            <input type="text" placeholder="Password"/>
                            <div></div>
                        </label>
                        <label htmlFor="" className="label label_mobile">
                            <input type="tel" placeholder="Mobile"/>
                            <div className="dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <div className="dropdown__header" style={dropdownHeaderStyle}>
                                    <svg style={dropdownArrowStyle} width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9393 13.0607C11.5251 13.6464 12.4749 13.6464 13.0607 13.0607L22.6066 3.51472C23.1924 2.92893 23.1924 1.97919 22.6066 1.3934C22.0208 0.807611 21.0711 0.807611 20.4853 1.3934L12 9.87868L3.51472 1.3934C2.92893 0.807611 1.97919 0.807611 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L10.9393 13.0607ZM10.5 11V12H13.5V11H10.5Z" fill="white" fill-opacity="0.6"/>
                                    </svg>
                                    <img src="./assets/images/flag.svg" alt=""/>
                                </div>
                                <div className="dropdown__list" style={dropdownListStyle}>
                                    <div className="dropdown__item">
                                        <img src="./assets/images/flag.svg" alt="" />
                                    </div>
                                    <div className="dropdown__item">
                                        <img src="./assets/images/flag.svg" alt="" />
                                    </div>
                                    <div className="dropdown__item">
                                        <img src="./assets/images/flag.svg" alt="" />
                                    </div>
                                    <div className="dropdown__item">
                                        <img src="./assets/images/flag.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </label>
                        <p className="sign-in__agree">
                            By signing up you’re agree to our <a>Terms &#38; Conditions and Privacy Policy</a>
                        </p>
                        <button className="sign-up__button button">Next step</button>
                    </form>
                    <div className="systems">
                        <div className="systems__header">
                            <div></div>
                            <p>Or continue with</p>
                            <div></div>
                        </div>
                        <div className="systems__main">
                            <div>
                                <img src="./assets/images/google.svg" alt="" />
                            </div>
                            <div>
                                <img src="./assets/images/apple.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUpSection;