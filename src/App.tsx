import React from 'react';
import logo from './logo.svg';
import './App.css';
import BadgeList from './component/badgeList';
import { BadgeListProvider } from './state/badge/context';
import BadgeInfiniteList from './component/badgeInfiniteList';

const App: React.FC = () => {
  return (
    <BadgeListProvider>
      <div className="App">
        <div>
          <BadgeInfiniteList></BadgeInfiniteList>
        </div>
      </div>
    </BadgeListProvider>
  );
}

export default App;
