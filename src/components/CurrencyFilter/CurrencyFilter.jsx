// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './CurrencyFilter.scss';
import React from 'react';

const CurrencyFilter = () => {
  const [currency, setCurrency] = React.useState('ILS');

  const currencies = ['ILS', 'USD'];
  const methods = ['Cash', 'Bank Transfer'];

  const handleSelect = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className='filter-block'>
      <Tabs>
        <TabList>
          <Tab>Buy BTC</Tab>
          <Tab>Sell BTC</Tab>
        </TabList>

        <TabPanel>
          <div className='form'>
            <div className='form-row inline'>
              <label htmlFor='currency' className='form-row_label'>
                Currency to Use for Purchase
              </label>
              <div className='form-row_holder'>
                <div className='select'>
                  <select id='currency' defaultValue={currency} onChange={handleSelect}>
                    {currencies.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className='form-row inline'>
              <label htmlFor='method' className='form-row_label pt-1'>
                Payment method
              </label>
              <div className='form-row_holder'>
                <div className='select'>
                  <select id='method' defaultValue='Cash'>
                    {methods.map((item, i) => (
                      <option key={i} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='chip-container'>
                  <button className='badge'>Cash</button>
                  <button className='badge'>Bank Transfer</button>
                </div>
              </div>
            </div>
            <div className='form-row inline'>
              <label htmlFor='purchase' className='form-row_label'>
                Purchase Amount
              </label>
              <div className='form-row_holder'>
                <div className='text-field'>
                  <input type='text' id='purchase' />
                  <span className='text-field__label'>{currency}</span>
                </div>
              </div>
            </div>
            <button className='btn btn-primary'>View offers</button>
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
