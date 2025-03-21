import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { BiPowerOff } from "react-icons/bi";

export default function Logout() {
  const navigate = useNavigate();
  const handleClick = async () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
  );
}
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem; /* Set a fixed width */
  height: 3rem; /* Set a fixed height */
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;

  svg {
    font-size: 1.5rem; /* Adjust font size for better visibility */
    color: #ebe7ff;
  }

  &:hover {
    background-color: #7a68d3;
  }
`;
