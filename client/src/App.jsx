import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="travel-header">
        <h1 className="travel-heading">เที่ยวไหนดี</h1>
        <form className="travel-searching">
          <div className="travel-searching-title">
            <label htmlFor="search">ค้นหาที่เที่ยว</label>
          </div>
          <div>
            <input
              className="travel-searching-box"
              type="text"
              id="search"
              placeholder="หาที่เที่ยวแล้วไปกัน..."
            />
            <hr className="travel-searching-line"></hr>
          </div>
        </form>
      </header>
      <main className="travel-container">
        <section className="travel-highlight">
          <img className="travel-picture" alt="stunning view" />
          <section className="travel-list">
            <h1 className="main-topics"></h1>
            <div className="travel-description">
              <div className="sub-topics"></div>
            </div>
            <div className="category-topics">
              <span className="category-topic"></span>
              <span className="category-add-and"></span>
              <span className="category-before-and"></span>
            </div>
            <div className="picture-groups">
              <img className="picture-topics" alt="travel images" />
              <img className="picture-topics" alt="travel images" />
              <img className="picture-topics" alt="travel images" />
              <a className="link-highlight"></a>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
