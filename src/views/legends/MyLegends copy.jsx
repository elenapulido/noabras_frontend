import React, { useState } from "react";
import { useEffect } from "react";
import Formular from "../../components/form/Formular";
import GetData from "../../service/GetData";
import "./MyLegends.css";
import { Segment, Grid, Divider } from 'semantic-ui-react';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function MyLegendsCopy() {
  useEffect(() => {
    dataFetch();
  }, []);

  const [MyLegends, SetMyLegends] = useState([]);

  const dataFetch = async () => {
    const dataResponse = await GetData();
    SetMyLegends(dataResponse);
  };

  // let legends = () => {
  //   MyLegends.map((data) => {
  //     <li>{data}</li>;
  //   });
  // };
  return (
    <div>
      <Navbar></Navbar>

    <div className="main-MyLegends">   
    <div className="card" key={data.id} style={{ width: "18rem" }}></div>   
      <Segment>
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
      <div>
        <h1>Legends</h1>
        <tbody>
          {MyLegends.map((data) => (
            <tr key={data.id}>
              <td>{data.name} </td>
              <td>{data.theme}</td>
              <td>{data.description}</td>
              <td>{data.location}</td>
              <td><img src={data.url} width={150} alt="" /></td>
            </tr>
          ))}
        </tbody>
      </div>
      
      </Grid.Column>

      <Grid.Column>
      <aside>
        <Formular />
      </aside>
      </Grid.Column>
      </Grid>
      <Divider vertical></Divider>
      </Segment>
      
    </div>
    <Footer></Footer>

    </div>

    

  );
}

export default MyLegendsCopy;
