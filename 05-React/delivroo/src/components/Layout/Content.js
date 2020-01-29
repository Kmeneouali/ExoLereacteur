import React, { useState, useEffect } from "react";
import SubHeader from "../SubHeader";
import MainList from "../MainList";
import Panier from "../Panier";
import axios from "axios";
export default function Content() {
  const [data, setData] = useState(null);

  const getData = async () => {
    axios
      .get("https://deliveroo-api.now.sh/menu")
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    // try {
    //   const response = await axios.get("https://deliveroo-api.now.sh/menu");
    //   console.log(response.data);
    //   getData(response.data);
    // } catch (error) {
    //   console.error(error.message);
    // }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    // Sub Header
    <>
      {data && data.restaurant && (
        <>
          <SubHeader
            name={data.restaurant.name}
            description={data.restaurant.description}
            picture={data.restaurant.picture}
          />
          <div className="main">
            <div className="main-lists">
              <MainList menu={data.menu} />
            </div>
            <Panier />
          </div>
        </>
      )}
    </>
  );
}
