import Widget from './components/Widget/Widget';

function App() {
  return (
    <div
      className="app"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
      }}
    >
      <Widget
        temperature={-0.9}
        summary="어제보다 1.3° 낮아요"
        location="서울"
      />
      <Widget
        temperature={-0.2}
        summary="어제보다 0.1° 높아요"
        location="부산"
      />
    </div>
  );
}

export default App;
