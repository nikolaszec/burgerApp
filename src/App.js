import React, {Component} from 'react';
import Layout from '../src/components/Layout/Layout'
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder'


class App extends Component {

  render() {
    return (
  
      <React.Fragment>
      <Layout>
     
      <BurgerBuilder/>
      </Layout>
      
      </React.Fragment>
    

      
      )
  }
  
}

export default App;
