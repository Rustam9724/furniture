import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState } from "react";


function DeskLamp() {
    const [activeColor, setActiveColor] = useState('pink');
    const [lampQuantity, setLampQuantity]= useState(1);

    function decrease() {
        if (lampQuantity > 1) {
            setLampQuantity(lampQuantity - 1)
        }
    }

    return (
        <section className="desk-lamp">
            <div className="desk-lamp__container _container">
                <div className="desk-lamp__header">
                    <Link className="desk-lamp__back-arrow" to="/main">
                        <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92894 13.1924 1.97919 12.6066 1.3934C12.0208 0.807615 11.0711 0.807615 10.4853 1.3934L0.939341 10.9393ZM3 10.5H2V13.5H3V10.5Z" fill="white"/>
                        </svg>
                    </Link>
                    <div className="desk-lamp__title">Desk Lamp</div>
                    <div className="desk-lamp__burger-btn">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="desk-lamp__parameters">
                    <div className="desk-lamp__parametr desk-lamp__parametr_discount">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.08481 0H8.57812C9.31649 0 10.0201 0.292742 10.5413 0.814379L18.1856 8.45651C19.2715 9.54235 19.2715 11.3057 18.1856 12.3916L12.3916 18.1856C11.3057 19.2715 9.54235 19.2715 8.45651 18.1856L0.814379 10.5413C0.292872 10.0201 0 9.31649 0 8.57812V2.08481C0 0.933387 0.933387 0 2.08481 0ZM4.86456 6.25443C5.63333 6.25443 6.25443 5.63333 6.25443 4.86456C6.25443 4.09578 5.63333 3.47468 4.86456 3.47468C4.09709 3.47468 3.47468 4.09578 3.47468 4.86456C3.47468 5.63333 4.09709 6.25443 4.86456 6.25443Z" fill="white"/>
                        </svg>
                        <p>-31%</p>
                    </div>
                    <div className="desk-lamp__parametr">
                        <svg width="19" height="26" viewBox="0 0 19 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.75 0C5.62578 0 6.33333 0.727695 6.33333 1.625V6.5H3.16667V1.625C3.16667 0.727695 3.8757 0 4.75 0ZM14.25 0C15.1258 0 15.8333 0.727695 15.8333 1.625V6.5H12.6667V1.625C12.6667 0.727695 13.3742 0 14.25 0ZM17.4167 8.125C18.2925 8.125 19 8.85117 19 9.75C19 10.6488 18.2925 11.375 17.4167 11.375V13C17.4167 16.9305 14.6953 20.1652 11.0833 20.9625V26H7.91667V20.9625C4.3032 20.1652 1.58333 16.9305 1.58333 13V11.375C0.709037 11.375 0 10.6488 0 9.75C0 8.85117 0.709037 8.125 1.58333 8.125H17.4167Z" fill="white"/>
                        </svg>
                        <p>1.8 m</p>
                    </div>
                    <div className="desk-lamp__parametr">
                        <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_108_136)">
                            <path d="M4.9628 19.5207C4.9628 19.7913 5.0432 20.0553 5.19673 20.2809L5.95553 21.3847C6.18795 21.7231 6.71566 21.9983 7.13491 21.9983H9.86509C10.2829 21.9983 10.8107 21.7233 11.0431 21.3847L11.7993 20.2813C11.9293 20.0906 12.036 19.7498 12.036 19.5207L12.0417 17.8364H4.95837L4.9628 19.5207ZM8.47348 0.000600465C3.95962 0.0140282 0.708374 3.56515 0.708374 7.52386C0.708374 9.43081 1.43619 11.1693 2.63681 12.4996C3.36861 13.3092 4.51124 15.0017 4.94863 16.4291C4.95002 16.4399 4.95279 16.4513 4.95417 16.4627H12.0464C12.0477 16.4513 12.0505 16.4406 12.0519 16.4291C12.4891 15.0017 13.6319 13.3092 14.3637 12.4996C15.5657 11.2063 16.2917 9.47035 16.2917 7.52386C16.2917 3.37781 12.7899 -0.012157 8.47348 0.000600465ZM8.50004 4.12546C6.54637 4.12546 4.95837 5.66761 4.95837 7.52429C4.95837 7.94066 4.63962 8.25003 4.25004 8.25003C3.86046 8.25003 3.54171 7.94066 3.54171 7.56253C3.54171 4.90878 5.76632 2.78871 8.50004 2.78871C8.89157 2.78871 9.20837 3.09632 9.20837 3.47621C9.20837 3.85609 8.88962 4.12546 8.50004 4.12546Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_108_136">
                            <rect width="17" height="22" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p>22 W</p>
                    </div>
                </div>
                <div className="desk-lamp__main">
                    <div className="desk-lamp__curtain">
                    </div>
                    <div className="desk-lamp__variant-rounds">
                        <div
                            className={`desk-lamp__variant-round ${activeColor === 'pink' && 'desk-lamp__variant-round_active'}`}
                            onClick={() => setActiveColor('pink')}
                        />
                        <div 
                            className={`desk-lamp__variant-round ${activeColor === 'yellow' && 'desk-lamp__variant-round_active'}`}
                            onClick={() => setActiveColor('yellow')}
                        />
                        <div className="desk-lamp__variant-round"
                            className={`desk-lamp__variant-round ${activeColor === 'blue' && 'desk-lamp__variant-round_active'}`}
                            onClick={() => setActiveColor('blue')}
                        />
                    </div>
                    <h2 className="desk-lamp__description-title">Desk Metal Lamp</h2>
                    <p className="desk-lamp__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <div className="desk-lamp__quantity">
                        <div className="desk-lamp__quantity__plus" onClick={() => setLampQuantity(lampQuantity + 1)}>
                            <div></div>
                            <div></div>
                        </div>
                        <p>{lampQuantity}</p>
                        <div className="desk-lamp__quantity__minus" onClick={decrease}>
                        </div>
                    </div>
                    <div className="desk-lamp__card-block">
                        <div className="desk-lamp__card-block__price-block price-block">
                            <p><span className="old-price">$34.99</span> $23.99</p>
                            <p>Total Payable</p>
                        </div>
                        <div className="card-block__button">
                            <div>
                                <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.64462 9.70447H20.3554L16.247 1.78116C15.9399 1.18398 16.1715 0.448219 16.7606 0.137695C17.3547 -0.172829 18.0847 0.0595433 18.3918 0.656877L23.0792 9.70447H27.3889C28.28 9.70447 29 10.4763 29 11.3295C29 12.274 28.28 12.9544 27.3889 12.9544L24.7759 23.5371C24.3731 24.9844 23.1295 26 21.6493 26H7.30538C5.87049 26 4.5816 24.9844 4.22312 23.5371L1.61111 12.9544C0.721476 12.9544 0 12.274 0 11.3295C0 10.4763 0.721476 9.70447 1.61111 9.70447H5.92083L10.6082 0.656877C10.9153 0.0595433 11.6453 -0.172829 12.2394 0.137695C12.8285 0.448219 13.0601 1.18398 12.753 1.78116L8.64462 9.70447ZM9.62136 15.3919C9.62136 14.9857 9.30417 14.5794 8.8158 14.5794C8.41806 14.5794 8.01024 14.9857 8.01024 15.3919V20.2669C8.01024 20.7594 8.41806 21.0793 8.8158 21.0793C9.30417 21.0793 9.62136 20.7594 9.62136 20.2669V15.3919ZM13.6491 15.3919V20.2669C13.6491 20.7594 14.0569 21.0793 14.4547 21.0793C14.9431 21.0793 15.3056 20.7594 15.3056 20.2669V15.3919C15.3056 14.9857 14.9431 14.5794 14.4547 14.5794C14.0569 14.5794 13.6491 14.9857 13.6491 15.3919ZM20.9444 15.3919C20.9444 14.9857 20.5819 14.5794 20.1389 14.5794C19.6958 14.5794 19.3333 14.9857 19.3333 15.3919V20.2669C19.3333 20.7594 19.6958 21.0793 20.1389 21.0793C20.5819 21.0793 20.9444 20.7594 20.9444 20.2669V15.3919Z" fill="white"/>
                                </svg>
                            </div>
                            <p>Add To Card</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <div className="desk-lamp-image">
                <img src="./assets/images/desk-lamp-section/desk-lamp.svg" alt="" />
            </div>
        </section>
    )
}

export default DeskLamp;