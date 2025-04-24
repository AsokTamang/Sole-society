import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";
import Header from "./header";
import { Link } from "react-router-dom";

export default function Detail() {
  const { id } = useParams(); //here we are destructuring the id of an item as useParams gets the variable passed from the URL.
  const [data, setdata] = React.useState(null); //we are using state to store the data
  React.useEffect(() => {
    axios.get("http://localhost:5001/api")
    .then((res) => {
      setdata(res.data.shoes.find((item) => item.id === id)); //here we are retrieving only that data whose id matches with the id of an item clicked or linked in about page
    });
  }, [id]);

  if (!data) {
    //this condition checks whether the data is completely fetched or not , which helps us to prevent from  catching the  error as react always render component first and then fetch data secondly.
    return <h1>Loading....</h1>;
  }

  return (
    <>
      <Header />

      <div className="totaldetail">
        <Link
          className="detaillink"
          style={{ color: "white", textDecoration: "none",width:'150px'}}

          to=".."
          relative="path"
        >
          <h3>🔙 Get back</h3>
        </Link>
        
        <div className="detailcontainer">
          <img src={data.imageUrl} style={{ width: 440, height: 440 }} />
          <h3 style={{ color: "white" }}>{data.name}</h3>
          <p style={{ color: "white", padding: "20px", width: "100%" }}>
            {data.description}
          </p>
          <p style={{ color: "white" }}>
            <span className="bolder">Type:</span>
            {data.type}
          </p>
          <p style={{ color: "white" }}>
            <span
              style={{ color: "rgba(247, 255, 10, 0.8)", fontWeight: "bold" }}
              className="bolder"
            >
              Price:
            </span>
            {data.price}
          </p>
        </div>
      </div>
    </>
  );
}
