import React from "react";
import { Input , Pagination} from 'antd';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchTag from './components/SearchTag';
import SearchResList from './components/SearchResList';
import './style.scss';
const SearchResult = () => {
  const { Search } = Input;
  return (
    <div className="SearchResult">
      <Header crtIndex={'/sxjy'}/>
      <div className="container">
        <div className="RoleSearch">
          <Search placeholder="输入关键词" enterButton="搜索" style={{ width: 400 }} />
        </div>
        <div style={{ padding:'20px' }}>
          <SearchTag/>
          <SearchResList/>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SearchResult;