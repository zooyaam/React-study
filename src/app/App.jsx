import './App.css';
import Widget from '../components/Widget/Widget';

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
        type="partly cloudy"
        temperature={-0.9}
        summary="어제보다 1.3° 낮아요"
        location="서울"
      />

      <Widget
        type="rainy"
        temperature={-0.7}
        summary="어제보다 0.1° 높아요"
        location="부산"
      />

      <Widget
        type="sunny"
        temperature={-1.2}
        summary="어제보다 1.1° 낮아요"
        location="베이징"
      />
    </div>
  );
}

export default App;
