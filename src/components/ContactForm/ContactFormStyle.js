import styled from "styled-components";

export const Input = styled.input`
    margin: 0 auto 20px;
    border: none;
    border-radius: 20px;
    height: 55px;
    width: 70%;
    padding: 10px;
    text-align: center;
`;

export const ContentField = styled.textarea`
    width: 70%;
    margin: 0 auto 20px;
    border: none;
    border-radius: 20px;
    height: 155px;
    padding: 10px;
    text-align: center;
`;

export const SendButton = styled.button`
    border: none;
    border-radius: 50px;
    color: #fff;
    display: flex;
    width: 20%;
    height: 45px;
    background: linear-gradient(270deg, #F46737 0%, #945DD6 100%);
    transition: .4s ease;
    font-size: 20px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;