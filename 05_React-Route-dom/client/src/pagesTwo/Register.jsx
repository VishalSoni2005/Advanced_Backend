import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/register", {
        name: name,
        email: email,
        password: password,
        role: role,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error, "ERror handle submit me hail=");
    }
  };

  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">Welcome</div>
        <div className="subtitle">Let&apos;s create your account!</div>
        <div className="input-container ic1">
          <input
            type="text"
            className="input"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="cut" />
          <label className="iLabel" htmlFor="name">
            Name
          </label>
        </div>

        <div className="input-container ic2">
          <input
            type="email"
            className="input"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="cut cut-short" />
          <label className="iLabel" htmlFor="email">
            Email
          </label>
        </div>

        <div className="input-container ic2">
          <input
            type="password"
            className="input"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="cut" />
          <label className="iLabel" htmlFor="password">
            Password
          </label>
        </div>

        <div className="input-container ic2">
          <input
            type="role"
            className="input"
            id="role"
            onChange={(e) => setRole(e.target.value)}
          />
          <div className="cut cut-short" />
          <label className="iLabel" htmlFor="role">
            Role
          </label>
        </div>

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form {
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    height: 500px;
    padding: 20px;
    width: 320px;
  }

  .title {
    color: #eee;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
  }

  .subtitle {
    color: #eee;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
  }

  .input-container {
    height: 50px;
    position: relative;
    width: 100%;
  }

  .ic1 {
    margin-top: 40px;
  }

  .ic2 {
    margin-top: 30px;
  }

  .input {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
  }

  .cut {
    background-color: #15172b;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 76px;
  }

  .cut-short {
    width: 50px;
  }

  .iLabel {
    color: #65657b;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
  }

  .input:focus ~ .cut {
    transform: translateY(8px);
  }

  .input:focus ~ .iLabel {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }

  .input:not(:focus) ~ .iLabel {
    color: #808097;
  }

  .input:focus ~ .iLabel {
    color: #dc2f55;
  }

  .submit {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    margin-top: 38px;
    text-align: center;
    width: 100%;
  }

  .submit:active {
    background-color: #06b;
  }
`;

export default Form;
