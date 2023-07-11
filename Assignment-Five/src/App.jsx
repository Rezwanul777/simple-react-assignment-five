/* eslint-disable no-undef */


import './App.css'




import Footer from './component/Footer'
import Content from './component/Content';
import Header from './component/Header';



  const App = () => {
    return (
      <div className="container">
        <Header title="My React App" />
        <Content/>
        <Footer />
      </div>
    );
  

    }
export default App
