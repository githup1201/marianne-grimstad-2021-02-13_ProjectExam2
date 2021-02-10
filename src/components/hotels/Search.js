import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";

function Search({ conductSearch }) {
	return (
        <Container>
		  <InputGroup className="Search">
			  <FormControl placeholder="Search by name..." onChange={event => conductSearch(event)} />
		  </InputGroup>
        </Container>
	);
}

Search.propTypes = {
	conductSearch: PropTypes.func.isRequired
};

export default Search;