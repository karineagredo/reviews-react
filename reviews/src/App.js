import Reviews from './components/Reviews';
function App() {
  return (
    <main>
      <div className='title'>
        <h2>Our reviews</h2>
        <div className='underline'></div>
      </div>
      <section className='container'>
        <Reviews />
      </section>
    </main>
  );
}

export default App;
