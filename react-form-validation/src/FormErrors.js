import React, { Component } from 'react';

class FormErrors extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { formErrors } = this.props; // Component App quem vai me mandar isto!
    // { email: '', password: '' }
    console.log(Object.keys(formErrors))
    return (
      <div>
        {Object.keys(formErrors).map((fieldName, i) => {
          console.log(formErrors[fieldName])
          if (formErrors[fieldName].length === 0) return ''
          return <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        })}
      </div>
    )
  }
}

export default FormErrors;