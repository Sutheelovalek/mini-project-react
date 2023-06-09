import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { FcLink } from 'react-icons/Fc'

function App() {
  const [topic, setTopic] = useState([]);
  const [searchTopic, setSearchTopic] = useState([]);
  const [toggle, setToggle] = useState([]);


 const handleInputChange = (event) => {
  setSearchTopic(event.target.value);
  handleSearch(event.target.value);
 };

 const handleSearch = async (searchId) => {
  try {
    const response = await axios.get(`http://localhost:4002/trips?keywords=${searchId}`
    );
    setTopic(response.data.data)
    setToggle(Array(response.data.data).fill(false));
  } catch (error) {
    alert(error.message);
  }
 }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:4002/trips?keywords=");
        console.log(response.data.data);
        setTopic(response.data.data);
      } catch (error) {
        alert(error);
      }
    };
    getData();
  }, []);
  const handleToggle = (index, event) => {
    event.preventDefault();
    setToggle((prevToggles) => {
      const newToggles = [...prevToggles];
      newToggles[index] = !newToggles[index];
      return newToggles;
    });
  };
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
              value={searchTopic}
              onChange={handleInputChange}
            />
            <hr className="travel-searching-line"></hr>
          </div>
        </form>
      </header>
      <main className="travel-container">
      {topic.map((place, index) => {
        const shortDescription = place.description.slice(0, 100) + '...';
        const toggleValue = toggle[index];
          return (
            <section key={place.eid} className="travel-highlight">
              <img
                className="travel-picture"
                src={place.photos[0]}
                alt="stunning view"
              />
              <section className="travel-list">
                <h1 className="main-topics">{place.title}</h1>
                <div className="travel-description">
                  <div className="sub-topics">
                     <div>{toggleValue ? place.description : shortDescription}</div>
                  </div>
                  <a
                    href="#"
                    onClick={(event) => handleToggle(index, event)}
                    className="link-topics"
                  >
                    {toggleValue ? "น้อยลง" : "อ่านต่อ"}
                  </a>
                </div>
        <div className="category-topics">
          หมวด
          <span className="category-topic">{place.tags.slice(0, -1).join(", ")}</span>
          <span className="category-add-and"> และ </span> 
          <span className="category-before-and">{place.tags.slice(-1)}</span>
        </div>
          <div className="picture-groups">
            <img className="picture-topics" src={place.photos[1]} alt="travel images" />
            <img className="picture-topics" src={place.photos[2]} alt="travel images" />
            <img className="picture-topics" src={place.photos[3]} alt="travel images" />
            <a href={place.url} className="link-highlight">
            <FcLink />
            </a>
          </div>
        </section>
        </section>
      )})}     
      </main>
    </div>
    );
  }
  
  export default App;