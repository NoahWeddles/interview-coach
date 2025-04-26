import { useState, useEffect } from 'react';

function App() {

  return (
    <>
      <Header />
      <div className="app">
        <Card title="Card 1" content="This is the first card." />
        <Card title="Card 2" content="This is the second card." />
        <Card title="Card 3" content="This is the third card." />
        <Card title="Card 4" content="This is the fourth card." />
        <Card title="Card 5" content="This is the fifth card." />
        <Card title="Card 6" content="This is the sixth card." />
        <Card title="Card 7" content="This is the seventh card." />
        <Card title="Card 8" content="This is the eighth card." />
      </div>
    </>
  );
}
function Header() {
  return (  
    <header className="app-header">
      <h1>My App</h1>
    </header>
  );
}

function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );

}

export default App;
