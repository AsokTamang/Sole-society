import React from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import Header from "./header";

export default function About() {
  const [searchparams, setsearchparams] = useSearchParams();   //this is a state for getting the searched url.
  const [clicked,setclicked]=React.useState(null);             //this is a state for maintaining the active or inactive of the button for the type.
  const [priced,setpriced]=React.useState(null)               //this is a state for maintaining the active or inactive of the button for the price.
  const typeFilter = searchparams.get("type");
  const priceFilter = searchparams.get("price");

  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:5001/api")  //this is link of ourbackend running at the server 5001.
    
      .then((res) => {
        setdata(res.data.shoes);           //in axios we dont need to set the response into json format.It automatically changes the response into json format.
     
      });
  }, []);



  const filteredData = data.filter((item) => {
    const typematch = typeFilter ? item.type === typeFilter : true;  //here in this code true means returning all the datas as they are.
    let pricematch = true;
    if (priceFilter) {
      const [min, max] = priceFilter.split("-").map(Number);  //split converts the string into an array and map converts every string in an array into number.
      pricematch = item.price >= min && item.price <= max;
    }
    return typematch && pricematch;
  });

  const elements =filteredData.length>0 ? filteredData.map((item) => (              //first we are checking the length of filtered data, if there is no any filtered data that match the condition then we display this <h1>No shoes available under this criteria.</h1>.here we are mapping over the filtered datas to display the data into our website.
    <div className="shoescontainer" key={item.id}>
      <Link style={{ textDecoration: "none", color: "white" }} to={`/about/${item.id}`}>
        <img src={item.imageUrl} style={{ width: 440, height: 440 }} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>
          <span style={{ color: "lightgreen" }} className="bolder">
            Type:
          </span>
          {item.type}
        </p>
        <p>
          <span style={{ color: "rgba(247, 255, 10, 0.8)", fontWeight: "bold" }} className="bolder">
            Price:
          </span>
          {item.price}
        </p>
      </Link>
    </div>
  )):<div className="errorhandle"> <h1>No shoes available under this criteria.</h1></div>;

  function handleClick(key, value) {
    setsearchparams((prevparam) => {
      const newParams = new URLSearchParams(prevparam);
      if (value === '') {
        newParams.delete(key); // this code removes the parameter if value is an empty string
      } else {
        newParams.set(key, value); //this code sets the parameter if a valid value is provided
      }

      return newParams.toString(); // Return the updated parameters as a string
    }
   
  );
  if (key==='type'){
    setclicked(value)
  }
  else if(key==='price'){
    setpriced(value)
  }
 
  }

  return (
    <div className="aboutsection">
      <Header />
      <section>
        Sole Society is a premier online shoe store offering a curated selection
        of high-quality footwear for every style and occasion. Whether you're
        looking for stylish sneakers, comfortable casual shoes, or elegant
        formal wear, we have something to fit every need. With a focus on
        comfort, durability, and the latest trends, Sole Society ensures that
        every pair of shoes enhances your lifestyle. Enjoy a seamless shopping
        experience with easy navigation, detailed product descriptions, customer
        reviews, and secure payment options. Discover your perfect pair today at
        Sole Society!
      </section>
      <nav className="firstnav">
        <section style={{ fontWeight: "bolder", color: "lightgreen" }}>
          Types:
        </section>
        <button onClick={() => handleClick('type', 'running')} className={clicked===('running')?'active-btn':'default-btn'}>RUNNING</button>
        <button onClick={() => handleClick('type', 'lifestyle')} className={clicked===('lifestyle')?'active-btn':'default-btn'}>LIFESTYLE</button>
        <button onClick={() => handleClick('type', 'training')} className={clicked===('training')?'active-btn':'default-btn'}>TRAINING</button>
        <button onClick={() => handleClick('type', 'trail')} className={clicked===('trail')?'active-btn':'default-btn'}>TRAIL</button>
        <button onClick={() => {
          setsearchparams({});
          setclicked(null);
          setpriced(null);
        }}>CLEAR</button>
      </nav>
      <br />
      <nav className="secondnav">
        <section style={{ fontWeight: "bolder", color: "yellow" }}>
          Price-Range:
        </section>
        <button onClick={() => handleClick('price', '0-100')} className={priced===('0-100')?'price-btn':''}>0-100</button>
        <button onClick={() => handleClick('price', '100-150')} className={priced===('100-150')?'price-btn':''}>100-150</button>
        <button onClick={() => handleClick('price', '150-200')} className={priced===('150-200')?'price-btn':''}>150-200</button>
      </nav>

      <div className="box">{elements}</div>
    </div>
  );
}
