import styled from "styled-components";

export const StyledToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 52px;
  height: 28px;
  margin: 14px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #dcd6f2;
    transition: background-color 0.4s ease;
    border-radius: 26px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 4px;
    bottom: 6px;
    background-color: hsl(273, 75%, 45%);
    transition: transform 0.4s ease;
    transition: background-color, transform 0.4s ease;
  }

  input:checked + .slider {
    background-color: #40414f;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
    background-color: #faff00;
  }
`;
