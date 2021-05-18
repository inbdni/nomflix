import React from "react";
import styled from "styled-components";

const Container = styled.div`
	margin-top: 50px;
	margin-bottom: 30px;
	text-align: center;
	hr {
		margin: 20px;
		border-color: #555555;
	}
	span {
		color: #999999;
	}
`;

const Footer = () => (
  <Container><hr></hr>
  <span>@Nomflix</span>
  </Container>
);

export default Footer;