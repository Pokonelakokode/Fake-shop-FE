import './App.scss';
import Header from './components/Header/Header';
import ProductList from './components/Header/ProductList/ProductList';
import ChatBubble from './components/ChatBubble/ChatBubble';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <section className="hero">
          <h2>Welcome to Fake Shop</h2>
          <p>Your one-stop shop for all things fake!</p>
          <button>Shop Now</button>
        </section>
        <ProductList />
      </main>
      <footer>
        <p>&copy; 2023 Fake Shop. All rights reserved.</p>
      </footer>
      {/* Floating chat bubble popup at bottom right */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <ChatBubble />
      </div>
    </div>
  );
}

export default App;
