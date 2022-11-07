import styled from "styled-components"

export const FormStyled = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40rem;
    display: flex;
    :active {
        border: #989898;
    }
 input {
    width: 100%;
    height: 1.5rem;
    border-radius: 10px;
    padding: 4px 8px;
    padding-top: 8px;
    border-width: 3px;
    border-color: rgb(88,88,88);
    margin: 0px 0px 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 };
 button {
    background-color:rgb(88,88,88);
  border-radius:0.625rem;
  font-style: normal;
  width: 10rem;
 color: white;
 border-radius: 20px;
 font-weight: bold;
 font-size: 15px;
 line-height: 18px;
 text-align: center;
 padding: 0.75rem;
 border: solid 1px transparent;
 align-items: center;
 margin-left: 1rem;
 }`