import React from "react";
import { Redirect } from "react-router-dom";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "", 
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      phoneNo: "", 
      country: "",
      city: "", 
      panNo: "", 
      aadharNo: "", 
      firstNameError: "",
      lastNameError: "",
      emailAddressError: "",
      passwordError: "",
      passwordConfirmationError: "",
      phoneNoError: "", 
      countryError: "", 
      cityError: "", 
      isFormSubmitted: false,
      redirectToDetails: false 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.validateUsername = this.validateUsername.bind(this); 
    this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(
      this
    );
    this.validatePhoneNo = this.validatePhoneNo.bind(this); 
    this.validateCountry = this.validateCountry.bind(this); 
    this.validateCity = this.validateCity.bind(this); 
    this.validatePanNo = this.validatePanNo.bind(this); 
    this.validateAadharNo = this.validateAadharNo.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formFields = [
      "firstName",
      "lastName",
      "username",
      "emailAddress",
      "password",
      "passwordConfirmation",
      "phoneNo",
      "country",
      "city",
      "panNo",
      "aadharNo"
    ];
    let isValid = true;
    formFields.forEach(field => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) {
      
      this.setState({ redirectToDetails: true });
    }

    this.setState({ isFormSubmitted: true });
  }

  validateField(name) {
    let isValid = false;

    switch (name) {
      case "firstName":
        isValid = this.validateFirstName();
        break;
      case "lastName":
        isValid = this.validateLastName();
        break;
      case "username":
        isValid = this.validateUsername();
        break;
      case "emailAddress":
        isValid = this.validateEmailAddress();
        break;
      case "password":
        isValid = this.validatePassword();
        break;
      case "passwordConfirmation":
        isValid = this.validatePasswordConfirmation();
        break;
      case "phoneNo":
        isValid = this.validatePhoneNo();
        break;
      case "country":
        isValid = this.validateCountry();
        break;
      case "city":
        isValid = this.validateCity();
        break;
      case "panNo":
        isValid = this.validatePanNo();
        break;
      case "aadharNo":
        isValid = this.validateAadharNo();
        break;
      default:
        isValid = true;
        break;
    }

    return isValid;
  }

  validateFirstName() {
    let firstNameError = "";
    const value = this.state.firstName.trim();
    if (value === "") firstNameError = "First Name is required";

    this.setState({ firstNameError });
    return firstNameError === "";
  }

  validateLastName() {
    let lastNameError = "";
    const value = this.state.lastName.trim();
    if (value === "") lastNameError = "Last Name is required";

    this.setState({ lastNameError });
    return lastNameError === "";
  }

  validateUsername() {
    let usernameError = "";
    const value = this.state.username.trim();
   

    this.setState({ usernameError });
    return usernameError === "";
  }

  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress.trim();
    if (value === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(value))
      emailAddressError = "Email is not valid";

    this.setState({ emailAddressError });
    return emailAddressError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password.trim();
    if (value === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({ passwordError });
    return passwordError === "";
  }

  validatePasswordConfirmation() {
    let passwordConfirmationError = "";
    const { password, passwordConfirmation } = this.state;
    if (password !== passwordConfirmation)
      passwordConfirmationError = "Password does not match Confirmation";

    this.setState({ passwordConfirmationError });
    return passwordConfirmationError === "";
  }

  validatePhoneNo() {
    let phoneNoError = "";
    const value = this.state.phoneNo.trim();
   

    this.setState({ phoneNoError });
    return phoneNoError === "";
  }

  validateCountry() {
    let countryError = "";
    const value = this.state.country.trim();
   

    this.setState({ countryError });
    return countryError === "";
  }

  validateCity() {
    let cityError = "";
    const value = this.state.city.trim();
   

    this.setState({ cityError });
    return cityError === "";
  }

  validatePanNo() {
    let panNoError = "";
    const value = this.state.panNo.trim();
   

    this.setState({ panNoError });
    return panNoError === "";
  }

  validateAadharNo() {
    let aadharNoError = "";
    const value = this.state.aadharNo.trim();
    

    this.setState({ aadharNoError });
    return aadharNoError === "";
  }

  render() {
    if (this.state.redirectToDetails) {
      return <Redirect to="/details" />; 
    }

    return (
      <div className="main">
        <h3>SignUp Form</h3>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for signing up, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>Email Address: {this.state.emailAddress}</div>
            
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.firstNameError && (
                <div className="errorMsg">{this.state.firstNameError}</div>
              )}
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.lastNameError && (
                <div className="errorMsg">{this.state.lastNameError}</div>
              )}
            

            <input
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.usernameError && (
                <div className="errorMsg">{this.state.usernameError}</div>
              )}
              <input
                type="email"
                placeholder="Email Address"
                name="emailAddress"
                value={this.state.emailAddress}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.emailAddressError && (
                <div className="errorMsg">{this.state.emailAddressError}</div>
              )}
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.passwordError && (
                <div className="errorMsg">{this.state.passwordError}</div>
              )}
              <input
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirmation"
                value={this.state.passwordConfirmation}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.passwordConfirmationError && (
                <div className="errorMsg">
                  {this.state.passwordConfirmationError}
                </div>
              )}
              <input
                type="text"
                placeholder="Phone Number"
                name="phoneNo"
                value={this.state.phoneNo}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.phoneNoError && (
                <div className="errorMsg">{this.state.phoneNoError}</div>
              )}
             
              <select
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                
              
              </select>
              <br />
              {this.state.countryError && (
                <div className="errorMsg">{this.state.countryError}</div>
              )}
             
              <select
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              >
                <option value="">Select City</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Delhi">Delhi</option>
                <option value="Indore">Indore</option>
                
              </select>
              <br />
              {this.state.cityError && (
                <div className="errorMsg">{this.state.cityError}</div>
              )}
              <input
                type="text"
                placeholder="PAN Number"
                name="panNo"
                value={this.state.panNo}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.panNoError && (
                <div className="errorMsg">{this.state.panNoError}</div>
              )}
              <input
                type="text"
                placeholder="Aadhar Number"
                name="aadharNo"
                value={this.state.aadharNo}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
              />
              <br />
              {this.state.aadharNoError && (
                <div className="errorMsg">{this.state.aadharNoError}</div>
              )}
              <button>Signup</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default FormComponent;

