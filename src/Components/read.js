/* eslint-disable no-undef */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Read() {
  
  const [apiiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://6490428c1e6aa71680cae7cf.mockapi.io/api/v1/fakedata")
      .then((Response) => {
        setApiData(Response.data);
      });
  }, []);

  const getData = () => {
    axios
      .get(`https://6490428c1e6aa71680cae7cf.mockapi.io/api/v1/fakedata`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };
}

const deleteApiData = (id) => {
  axios
    .delete(`https://6490428c1e6aa71680cae7cf.mockapi.io/api/v1/fakedata/${id}`)
    .then(() => {
      setData();
    });

  const setData = (data) => {
    
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  return (
    <div>
      <h1 className="main-header">Read Component</h1>

      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {apiiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>
                  {data.checkbox ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => deleteApiData(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};
