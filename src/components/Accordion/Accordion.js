import { useState } from "react";
import './Accordion.css';
import { Vector } from "./Vector.js";

const accordionData = [
    {
        title: "Any tips for a first-time investor on StartupBoosters?",
        content:
            `1. Only invest what you can afford to lose.\n
        2. Only invest in what you understand. Preferably a product or mission that you love.\n
        3. Do your research. You also can ask the founders a question on their money profile.\n
        4. Diversify. It's better to make multiple small investments rather than one large one. Plus, it'll help you learn more.\n
        5. Look at the Lead Investor. Has a more experienced investor invested in the company under the same terms as you? Why are they investing?\n
        Note that these are tips, not investment recommendations. You should make your own decisions when deciding what to invest in.\n`,
    },
    {
        title: "Where does my money go after I invest?",
        content: `
        Wefunder is prohibited by law from touching your money. When you invest, your funds are transferred to an escrow account. If the raise succeeds, your money will be released to the startup. Otherwise, it will be refunded to you.
        `,
    },
    {
        title: "How do I know the worth of my investment?",
        content: `
        As there is no liquid secondary market for private securities like the New York Stock Exchange, it’s difficult for us to provide a dynamically updated value for your investment. The best way to approximate the value of your investment is to compare the company’s valuation from the round you invested in with their most recent valuation.

If the company IPOs, you’ll be able to track the value of your shares the same way you would for public company stocks.
        `,
    },
    {
        title: "How long before I see a return?",
        content: `
        The amount of time it takes to see a return is highly dependent on the type of investment contract. On average, companies on Wefunder that earn a return take around 7 years to do so.
        `,
    },
];

const AccordionSection = ({
    section,
    isActiveSection,
    setActiveIndex,
    sectionIndex,
}) => {
    const toggleSection = () => {
        const nextIndex = isActiveSection ? null : sectionIndex;
        setActiveIndex(nextIndex);
    };
    return (
        <div className="accordion-data">
            <div className='accordionTitleStyles' onClick={toggleSection}>
                <div className="accordions-title">{section.title}</div>
                <div className="accordion-button" style={{ 'background-color': isActiveSection ? '#F0F8FF' : '#F7F7F7', 'rotate': isActiveSection ? '45deg' : null }}>
                    <Vector fill={isActiveSection && '#16263D'} size={isActiveSection && 30} />
                </div>
            </div>
            {isActiveSection && (
                <div className='accordionContentStyles'>{section.content}</div>
            )}
            <div className="accordion-line"></div>
        </div>
    );
};

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="accordion">
            <div className="accordion-content">
                <div className="accordion-title">Frequently Asked Questions</div>
                <div className="accordion-subtext">We`re happy to answer your questions</div>

            </div>
            {/* <div className="accordion-line-last"></div> */}
            <div className='accordionStyles'>
                {accordionData.map((section, index) => (
                    <AccordionSection
                        section={section}
                        key={index}
                        isActiveSection={index === activeIndex}
                        setActiveIndex={setActiveIndex}
                        sectionIndex={index}
                    />
                ))}
            </div>
        </div>

    );
};

export default Accordion;