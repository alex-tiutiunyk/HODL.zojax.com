import CurrencyFilter from '../CurrencyFilter/CurrencyFilter';
import './WelcomeSection.scss';

const WelcomeSection = () => {
  return (
    <section className='welcome-section'>
      <div className='welcome-section__container'>
        <header className='welcome-section__head'>
          <h1 className='welcome-section_title'>Welcome to Zojax</h1>
          <p>Anonymous P2P deals on your terms. Trade globally.</p>
          <p>
            Using any payment system. For any <a href='#'>currency</a>.
          </p>
        </header>
        <CurrencyFilter />
      </div>
    </section>
  );
};

export default WelcomeSection;
