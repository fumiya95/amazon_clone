//Header
const Header = () => {
    return (
      <header style={{ padding: '10px 20px', background: '#232f3e', color: '#fff' }}>
        <h1>Amazon Clone</h1>
        <nav>
          <a href="/" style={{ marginRight: '15px', color: '#fff' }}>Home</a>
          <a href="/cart" style={{ marginRight: '15px', color: '#fff' }}>Cart</a>
          <a href="/login" style={{ color: '#fff' }}>Login</a>
        </nav>
      </header>
    );
  };
  
  export default Header;