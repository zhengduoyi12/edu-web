// 信息页
import React from "react";
import Header from 'components/Header.js';
import Footer from 'components/Footer.js';
import './home.css';

// header
// 内容1: info
// footer
const InfoView = (props) => {
  const title = props.history.location.params && props.history.location.params.title;
  return (
    <div className='App'>
      <Header crtIndex={1} />
      <div className='body' style={{minHeight:'500px',fontSize:'50px'}}>
         info页
        {title}
      </div>
      <Footer />
    </div>
  );
};

export default InfoView;