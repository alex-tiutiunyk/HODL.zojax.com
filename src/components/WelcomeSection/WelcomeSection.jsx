import CurrencyFilter from '../CurrencyFilter/CurrencyFilter';
import './WelcomeSection.scss';

const WelcomeSection = () => {
  return (
    <section className='welcome-section'>
      <div className='welcome-section__container'>
        <header className='welcome-section__head'>
          <h1 className='welcome-section_title'>Welcome to Zojax</h1>
          <p>
            The only Cryptocurrency P2P exchange based trusted transactions between Buyer/Seller
            guaranteed by Zojax Group, LLC
          </p>
        </header>
        <CurrencyFilter />
      </div>
    </section>
  );
};

export default WelcomeSection;
