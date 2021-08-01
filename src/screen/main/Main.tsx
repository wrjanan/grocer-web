import React, { CSSProperties, useState } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { ItemListProvider } from '../../state/item/context';
import ItemInfiniteList from '../../component/itemInfiniteList';
import { Affix, Button, Col, Row } from 'antd';
import MainCarousel from '../../component/mainCarousel';
import { IItem } from '../../model/item';
import { ItemTable } from '../../component/itemTable';
import ItemModal from '../../component/itemModal';

const contentStyle: CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Main2: React.FC = () => {
  const [ tags, setTags ] =  useState<number[]>([]);
  const [ items, setItems ] =  useState<IItem[]>([]);



  return (
    <ItemListProvider>
      <Row justify="center">
        <Col span="14">
          <ItemTable itemList={items}></ItemTable>
        </Col>
      </Row>
    </ItemListProvider>
  );
}

export default Main2;