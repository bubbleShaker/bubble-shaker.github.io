import React from 'react';

const About: React.FC = () => {
  return (
    <section className="App-about">
      <h2>自己紹介</h2>
      <p>そうです。群馬大学4年です。</p>
      <h3>趣味</h3>
      <p>競技プログラミングが趣味です。AtCoderはアルゴリズム緑、ヒューリスティック緑です。最近はルービックキューブにハマりそうでしたが、ハマりすぎて生活が崩壊しそうだったので引退しました。</p>
      <h3>リンク</h3>
      <ul>
        <li><a href="https://x.com/bubble_shaker" target="_blank">X(Twitter)</a></li>
        <li><a href="https://atcoder.jp/users/Coji" target="_blank">AtCoder</a></li>
      </ul>
    </section>
  );
}

export default About;
