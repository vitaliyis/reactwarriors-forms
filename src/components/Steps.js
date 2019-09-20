import React from "react"

const steps = ['Basic', 'Contacts', 'Avatar', 'Finish']

const Steps = props => {
  const {stepActive} = props

  return (
    <div className="steps mb-4">
      {steps.map((step, i) =>(
        <div
          key={i}
          className={`step ${i === stepActive ? "is-active" : ""}
            ${i < stepActive ? "is-completed" : ""}`}>
          <div className="step__marker">{i + 1}</div>
          <div className="step__title mt-1">{step.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Steps