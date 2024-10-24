import React, { useState } from "react";
import "./SignupSection.css";

const SignupSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [err, setErr] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    password: false,
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValidEmail;
  };

  const validatePhoneNumber = (phoneNumber) => {
    return phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);
  };

  const validatePassword = (password) => {
    return password.length >= 4 && password.length <= 60;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setErr((prev) => ({ ...prev, email: !validateEmail(value) }));
    } else if (name === "password") {
      setErr((prev) => ({ ...prev, password: !validatePassword(value) }));
    } else if (name === "phoneNumber") {
      setErr((prev) => ({ ...prev, phoneNumber: !validatePhoneNumber(value) }));
    } else if (name === "firstName") {
      setErr((prev) => ({ ...prev, firstName: value === "" }));
    } else if (name === "lastName") {
      setErr((prev) => ({ ...prev, lastName: value === "" }));
    }
  };

  const handleErr = () => {
    const emailIsValid = validateEmail(form.email);
    const passwordIsValid = validatePassword(form.password);
    const phoneNumberIsValid = validatePhoneNumber(form.phoneNumber);
    const firstNameIsValid = form.firstName !== "";
    const lastNameIsValid = form.lastName !== "";

    setErr({
      firstName: !firstNameIsValid,
      lastName: !lastNameIsValid,
      email: !emailIsValid,
      phoneNumber: !phoneNumberIsValid,
      password: !passwordIsValid,
    });

    if (
      firstNameIsValid &&
      lastNameIsValid &&
      emailIsValid &&
      phoneNumberIsValid &&
      passwordIsValid
    ) {
      console.log({
        first_name: form.firstName,
        last_name: form.lastName,
        phone_number: form.phoneNumber,
        email: form.email,
        password: form.password,
      });

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleErr();
  };

  return (
    <div className="signup-section">
      <h2 className="signup-title">Ready to take a free trial?</h2>
      <p className="signup-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h4 className="signup-form-heading">Sign up for a free account</h4>
        <div className="signup-input-div">
          <div>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleForm}
              onBlur={handleBlur}
              placeholder="First name"
              className="signup-input"
            />
            {err.firstName && <p className="err">First name is required.</p>}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleForm}
              onBlur={handleBlur}
              placeholder="Last name"
              className="signup-input"
            />
            {err.lastName && <p className="err">Last name is required.</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleForm}
              onBlur={handleBlur}
              placeholder="Email address"
              className="signup-input"
            />
            {err.email && (
              <p className="err">Please enter a valid email address.</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleForm}
              onBlur={handleBlur}
              placeholder="Phone Number"
              className="signup-input"
            />
            {err.phoneNumber && (
              <p className="err">Please enter a valid phone number.</p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleForm}
              onBlur={handleBlur}
              placeholder="Create password"
              className="signup-input-password"
            />
            {err.password && (
              <p className="err">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </div>
        </div>
        <button type="submit" className="signup-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignupSection;
