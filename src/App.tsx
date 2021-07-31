import React, { CSSProperties, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ItemListProvider } from './state/item/context';
import ItemInfiniteList from './component/itemInfiniteList';
import { Affix, Button, Col, Row } from 'antd';
import MainCarousel from './component/mainCarousel';
import { IItem } from './model/item';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';
import Main from './screen/main/Main';

const contentStyle: CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const states = [
  {
    name: 'Home',
    url: '/',
    component: Main,
  }
]

const plugins = [pushStateLocationPlugin];


const App: React.FC = () => {
  const [ tags, setTags ] =  useState<number[]>([]);
  const [ badges, setItems ] =  useState<IItem[]>([]);

  return (
    <UIRouter plugins={plugins} states={states}>
      <link rel='manifest' href="{{ asset('manifest.json') }}" crossOrigin="use-credentials"></link>
      <UIView />
    </UIRouter>
  );
}

export default App;
