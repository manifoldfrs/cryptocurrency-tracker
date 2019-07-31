import React from 'react';
import Chart from './components/Chart.jsx';
import CoinList from './components/CoinList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Chart />
        <CoinList />
      </div>
    );
  }
}

export default App;

