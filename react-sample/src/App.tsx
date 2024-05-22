import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';
import anime from './anime.min.js';

// ランダムな位置を生成する関数
const getRandomPosition = () => ({
  top: Math.random() * window.innerHeight,
  left: Math.random() * window.innerWidth,
});
// 初期位置を生成する関数
const getDefaultPosition = () => ({
  top: window.innerHeight/2,
  left: window.innerWidth/2,
});
// ブロックコンポーネント
const Block = ({ style }: { style: React.CSSProperties }) => {
  return <div className="block" style={style} />;
};
// 座標オブジェクトの型を定義
interface Position {
  top: number;
  left: number;
}

let isFirstRun: boolean = true;

const App: React.FC = () => {
  // blocks状態とその更新関数を定義
  const [blocks, setBlocks] = useState<Position[]>([]);
  useEffect(() => {
    const initialBlocks = [];
    for (let i = 0; i < 30; i++) {
      initialBlocks.push(getDefaultPosition());
    }
    // 初期位置をblocks状態に設定
    setBlocks(initialBlocks);
    function animateBlocks() {
      anime({
        targets: ".block",
        translateX: function () {
          return anime.random(-800, 700);
        },
        translateY: function () {
          return anime.random(-500, 500);
        },
        scale: function () {
          return anime.random(1, 3);
        },
        duration: 2500,
        delay: isFirstRun ? 0 : anime.stagger(30), // 初回実行時のみ遅延なし
        complete: () => {
          isFirstRun = false; // 初回実行が完了したことを設定
          animateBlocks(); // アニメーションを再度実行
        },
      });
    }

    animateBlocks();
  }, []);
  return (
    <div className="container">
      <div className="App">
        {blocks.map((style, index) => (
          <Block key={index} style={{ top: style.top, left: style.left }} />
        ))}
        <Header />
        <main>
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
