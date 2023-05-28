import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [topic, setTopic] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4002/trips?keywords=`
        );
        console.log(response.data.data);
        setTopic(response.data.data);
        
      } catch (error) {
        alert(error);
        
      }
    };
    getData();
  }, [])


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
        {topic.map((place, index) => {
          return (
        <section 
        key={index.eid}
        className="travel-highlight">
          <img src={place.photos[0]} className="travel-picture" alt="stunning view" />
          <section className="travel-list">
            <h1 className="main-topics">{place.title}</h1>
            <div className="travel-description">
              <h2 className="sub-topics">{place.description}</h2>
            </div>
            <div className="category-topics">
              <span className="category-topic">{place.tags.slice(0,-1).join(',')}</span>
              <span className="category-add-and">และ</span>
              <span className="category-before-and">{place.tags.slice(-1)}</span>
            </div>
            <div className="picture-groups">
              <img src={place.photos[1]} className="picture-topics" alt="travel images" />
              <img  src={place.photos[2]} className="picture-topics" alt="travel images" />
              <img src={place.photos[3]} className="picture-topics" alt="travel images" />
              <a className="link-highlight"></a>
            </div>
          </section>
        </section>
            
          );
        })}
      </main>
    </div>
  );
}

export default App;
