import React, { CSSProperties, useState } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { ItemListProvider } from '../../state/item/context';
import ItemInfiniteList from '../../component/itemInfiniteList';
import { Affix, Button, Col, Row } from 'antd';
import MainCarousel from '../../component/mainCarousel';
import { IItem } from '../../model/item';

const contentStyle: CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Main: React.FC = () => {
  const [ tags, setTags ] =  useState<number[]>([]);
  const [ items, setItems ] =  useState<IItem[]>([]);

  return (
    <ItemListProvider>
      <Row justify="center">
        <Col span="24">
          <MainCarousel></MainCarousel>
        </Col>
      </Row>
      <Row justify="center">
        <Col span="14">
          <ItemInfiniteList tagList={tags} itemList={items}></ItemInfiniteList>
        </Col>
      </Row>
    </ItemListProvider>
  );
}

export default Main;
