import { Button, Checkbox, Form } from "semantic-ui-react";
import React, { useState } from "react";
import axios from "axios";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    axios.post("https://6490428c1e6aa71680cae7cf.mockapi.io/api/v1/fakedata", {
      firstName,
      lastName,
      checkbox,
    });
  };

  return (
    <Form className="create-form">
      <h2> Add Details</h2>
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
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
      <Button type="submit" onClick={postData}>
        Submit
      </Button>
      <Button>Update</Button>
    </Form>
  );
}
