import React from "react";
import Basic from "./steps/Basic"
import Contacts from "./steps/Contacts"
import Avatar from "./steps/Avatar"
import Steps from "./Steps"
import Finish from "./steps/Finish";
import NavigationButtons from "./NavigationButtons";


export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      stepActive: 0,
      values: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: "male",
        email: "",
        mobile: "",
        country: "1",
        city: "",
        avatar: ""
      },
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        repeatPassword: false,
        email: false,
        mobile: false,
        avatar: false
      }
    }
  }

  onChange = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState(state => ({
      values: {...state.values, [name] : value},
      errors: {...state.errors, [name] : false}
    }))
  }



  getErrors = () => {
    const errors = {}

    switch (this.state.stepActive) {
      case 0:
        if (this.state.values.firstname.length < 5) {
          errors.firstname = "Must be 5 characters or more"
        }

        if (this.state.values.lastname.length < 5) {
          errors.lastname = "Must be 5 characters or more"
        }

        if (this.state.values.password.length < 6) {
          errors.password = "Must be 6 characters or more"
        }

        if (this.state.values.password !==  this.state.values.repeatPassword) {
          errors.repeatPassword = "Must be equal password"
        }
        break;
      case 1:
        if (!this.state.values.email) {
          errors.email = "Required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.values.email)){
          errors.email = "Invalid email address";
        }

        if (!/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/i.test(this.state.values.mobile)) {
          errors.mobile = "Invalid mobile";
        }

        if (!this.state.values.city) {
          errors.city = "Required";
        }
        break;
      case 2:
        if (!this.state.values.avatar) {
          errors.avatar = 'Required'
        }
        break;
      default:
        break;
    }

    return errors;
  }

  onNext = event => {
    event.preventDefault();

    const errors = this.getErrors();

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors: errors
      })
    } else {    // если ошибок нет
      this.setState({
        errors: {},
        stepActive: this.state.stepActive + 1
      })
    }
  }

  onPrev = () => {
    this.setState({
      stepActive: this.state.stepActive - 1
    })
  }

  onReset = () => {
    this.setState({
      values: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",
        gender: "male",
        email: "",
        mobile: "",
        country: "1",
        city: "",
        avatar: ""
      },
      stepActive: 0,
      errors: {}
    })
  }

  render() {
    const {stepActive} = this.state
    return (
      <div className="form-container card">
        <form className="form card-body">
          <Steps
            steps={this.state.steps}
            stepActive={this.state.stepActive}
          />
          {stepActive === 0 && (
              <Basic
                values={this.state.values}
                errors={this.state.errors}
                onChange={this.onChange}
              />
            )}
          {stepActive === 1 && (
              <Contacts
                values={this.state.values}
                errors={this.state.errors}
                onChange={this.onChange}
              />
            )}
          {stepActive === 2 && (
              <Avatar
                value={this.state.values.avatar}
                error={this.state.errors.avatar}
                onChange={this.onChange}
              />
            )}
          {stepActive === 3 && (
            <Finish
              values={this.state.values}
            />
          )}

          <NavigationButtons
            stepActive={stepActive}
            onPrev={this.onPrev}
            onNext={this.onNext}
            onReset={this.onReset}
          />

        </form>
      </div>
    );
  }
}
