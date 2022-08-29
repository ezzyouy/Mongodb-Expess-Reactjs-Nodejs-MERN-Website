import React, { useState } from "react";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import Form from "../../node_modules/react-bootstrap/esm/Form";
import InputGroup from "../../node_modules/react-bootstrap/esm/InputGroup";
import FormControl from "../../node_modules/react-bootstrap/esm/FormControl";
import { useNavigate } from "../../node_modules/react-router-dom/index";

const SearchBox = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : "/search");
  };
  return (
    <Form className="d-flex me-auto" onSubmit={submitHandler}>
      <InputGroup>
        <FormControl
          type="text"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search products..."
          aria-label="Search Products"
          aria-describedby="button-search"
        ></FormControl>
        <Button variant="outline-primary" type="submit" id="button-search">
          <i className="fa fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBox;
