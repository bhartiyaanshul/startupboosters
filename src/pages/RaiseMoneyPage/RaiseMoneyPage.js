import { useState } from "react";
import landingimage from "./image.svg";
import founderfriendly from "./Images/Fundingeasy.svg";
import buildbyfounders from "./Images/builtbyfounders.svg";
import "./RaiseMoneyPage.css";
import { LetsStartSection } from "../../components/LetsStartSection/LetsStartSection";

export default function RaiseMoneyPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="raise-money-page">
            <div className="introsection">
                <div className="intro-section-content">
                    <div className="intro-section-details">
                        <div className="intro-section-title">
                            Let your <br /> <span className="highlight-text">community</span> invest
                        </div>
                        <div className="intro-section-subtext">
                            Raise $50K to $5M+ from hundreds of customers, fans, and friends—all in one line on your cap table.
                        </div>
                        <button onClick={() => setIsMenuOpen(true)} className="button-b">Get Started</button>
                    </div>
                    <img className="intro-image" src={landingimage} alt="Landing" />
                </div>
            </div>
            <img className="founder-friendly-img" src={founderfriendly} alt="Founder Friendly" />
            <img className="built-by-founders-img" src={buildbyfounders} alt="Built by Founders" />
            <LetsStartSection />

            {/* Overlay when menu is open */}
            <div className={`overlay ${isMenuOpen ? "open" : ""}`} onClick={() => setIsMenuOpen(false)}></div>

            {/* Right Side Menu */}
            <div className="right-side-menu">
                <div
                    className={`menu-container ${isMenuOpen ? "open" : ""}`}
                >
                    <h2 className="menu-title">Let's gets community round started!</h2>
                    <form className="raise-form-container">
                        <div className="form-group">
                            <label htmlFor="name">1. What's your company's name?</label>
                            <input id="name" type="text" placeholder="StartupBoosters" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="website">2. What's your company's website?</label>
                            <input id="name" type="text" placeholder="https://" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">3. Where is your company based?</label>
                            <input id="name" type="text" placeholder="eg. New York" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">4. How would you categorize your company?</label>
                            <input id="name" type="text" placeholder="eg. Technology, Entertainment" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="do">5. In simple words, what does your company do?</label>
                            <input id="name" type="text" placeholder="eg. Doordash for dogs" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="raise">6. How much have you raised previously?</label>
                            <input id="name" type="text" placeholder="An esitmation is fine" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="raise">7. How much do you want to raise this round?</label>
                            <input id="name" type="text" placeholder="An esitmation is fine" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">8. Is there anything you'd like us to know?</label>
                            <input id="message" type="text" placeholder="Optional" className="form-input" />
                        </div>
                        <button type="submit" className="form-submit">Submit</button>
                    </form>
                    {/* <button onClick={() => setIsMenuOpen(false)} className="close-btn">
                        Close
                    </button> */}
                </div>
            </div>
        </div>
    );
}
