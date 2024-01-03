import { Link } from "react-router-dom";

function SignInSection() {
    return (
        <section className="sign-section">
            <div className="sign-section__container _container">
                <div className="sign-section__header">
                    <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="57" height="57" rx="16" fill="#474474" fill-opacity="0.6"/>
                        <path d="M20.9393 26.9393C20.3536 27.5251 20.3536 28.4749 20.9393 29.0607L30.4853 38.6066C31.0711 39.1924 32.0208 39.1924 32.6066 38.6066C33.1924 38.0208 33.1924 37.0711 32.6066 36.4853L24.1213 28L32.6066 19.5147C33.1924 18.9289 33.1924 17.9792 32.6066 17.3934C32.0208 16.8076 31.0711 16.8076 30.4853 17.3934L20.9393 26.9393ZM23 26.5H22V29.5H23V26.5Z" fill="white"/>
                    </svg>
                    <h1 className="sign-section__title">Sign in</h1>
                </div>
                <div className="sign-section__main sign-main">
                    <h2 className="sign-main__title">Welcome back! 👋</h2>
                    <p className="sign-main__subtitle">You dont have an account yet? <a>Sign up</a></p>
                    <form>
                        <label htmlFor="" className="label label_email">
                            <input type="email" placeholder="Email adress"/>
                        </label>
                        <label htmlFor="" className="label label_pasword">
                            <input type="password" placeholder="Password"/>
                            <div></div>
                        </label>
                        <Link className="sign-in__recovery__password" to="/sign-up">Recovery password</Link>
                        <Link className="sign-in__button button" to="/main">Sign in</Link>
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

export default SignInSection;