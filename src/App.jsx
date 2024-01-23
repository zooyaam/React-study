import Widget from './components/Widget/Widget';

function App() {
  return (
    <div className="app">
      <Widget
        temperature={-0.9}
        summary="어제보다 1.3° 낮아요"
        location="Seoul"
      />
      <Widget
        temperature={1.2}
        summary="어제보다 0.2° 낮아요"
        location="Busan"
      />
    </div>
  );
}

export default App;
