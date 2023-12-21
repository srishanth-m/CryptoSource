import React from 'react'
import millify from 'millify';
import {Typography , Row , Col , Statistic} from 'antd'
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

const {Title} = Typography;

const Homepage = () => {
 
  const {data , isFetching} = useGetCryptosQuery(10);

  if(isFetching) return 'Loading...'

  const globalStata = data?.data?.stats;

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}> <Statistic title="Total Cryptocurrencies" value={globalStata.total}></Statistic> </Col>
        <Col span={12}> <Statistic title="Total Exchanges" value={millify(globalStata.totalExchanges)}></Statistic> </Col>
        <Col span={12}> <Statistic title="Total Market Cap" value={millify(globalStata.totalMarketCap)}></Statistic> </Col>
        <Col span={12}> <Statistic title="Total 24h volume" value={millify(globalStata.total24hVolume)}></Statistic> </Col>
        <Col span={12}> <Statistic title="Total Markets" value={millify(globalStata.totalMarkets)}></Statistic> </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'> <Link to="/cryptocurrencies"> Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Title level={2} className='home-title'>Latest crypto news</Title>
        <Title level={3} className='show-more'> <Link to="/cryptocurrencies"> Show more</Link></Title>
      </div>
      <News simplified/>

    </>
  )
}

export default Homepage
