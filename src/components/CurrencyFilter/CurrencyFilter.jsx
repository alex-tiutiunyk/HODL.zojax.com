// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './CurrencyFilter.scss';

const CurrencyFilter = () => {
  return (
    <div className='filter-block'>
      <Tabs>
        <TabList>
          <Tab>Buy BTC</Tab>
          <Tab>Sell BTC</Tab>
        </TabList>

        <TabPanel>
          <div className='form-row inline'>
            <label htmlFor='currency'>Currency to Use for Purchase</label>
            <div className='form-row_holder'>
              <select id='currency'>
                <option selected>ILS</option>
                <option>USD</option>
              </select>
            </div>
          </div>
          <div className='form-row inline'>
            <label htmlFor='method'>Payment method</label>
            <div className='form-row_holder'>
              <select id='method'>
                <option selected>Cash</option>
                <option>Bank Transfer</option>
              </select>
              <div className='chip-container'>
                <button className='badge'>Cash</button>
                <button className='badge'>Bank Transfer</button>
              </div>
            </div>
          </div>
          <div className='form-row inline'>
            <label htmlFor='purchase'>Purchase</label>
            <div className='form-row_holder'>
              <div className='text-field' value='USD'>
                <input type='text' id='purchase' />
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CurrencyFilter;
