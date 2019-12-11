import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/app.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const Home = (props) => {
  return (
    <React.Fragment>
      <Search />
      {
        props.myList.length  > 0 && 
        <Categories title="My List">
          <Carousel>
              {
              props.myList.map(item =>
                <CarouselItem
                  key={item.id}
                  {...item}
                  isList
                />) 
              }
          </Carousel>
          </Categories>
      }

      <Categories title="Trends">
        <Carousel>
          {
            props.trends.map(item => <CarouselItem key={item.id} {...item} isList={false}/>)
          }
         
        </Carousel>
      </Categories>

      <Categories title="Most recent">
        <Carousel>
        {
          props.originals.map(item => <CarouselItem key={item.id} {...item} />)
        }
        </Carousel>
      </Categories>
      
    </React.Fragment>
  );
}

const mapStateToProps = (state, props) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  }
}

export default connect(mapStateToProps, null)(Home);