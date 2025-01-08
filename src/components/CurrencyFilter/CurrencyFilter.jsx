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
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CurrencyFilter;
