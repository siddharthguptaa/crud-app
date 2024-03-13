import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Checkbox } from "semantic-ui-react";

export default function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id, setID] = useState(null);

  const updateApiData = () => {
    axios.put(
      `https://6490428c1e6aa71680cae7cf.mockapi.io/api/v1/fakedata/${id}`,
      { firstName, lastName, checkbox }
    );
  };

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);

  return (
    <Form className="create-form">
      <h2> Update Details</h2>
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
        checked={checkbox}
          label="I agree to the Terms and Conditions"
          
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button type="submit" onClick={updateApiData}>Submit</Button>
    </Form>
  );
}
