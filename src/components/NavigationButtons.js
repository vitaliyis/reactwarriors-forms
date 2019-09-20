import React from "react"

const NavigationButtons = props => {
  const { stepActive, onPrev, onNext, onReset } = props
  return (
    <div className="text-center mt-3">
      {stepActive !== 3 ? (
        <div>
          <button
            type="button"
            className="btn btn-light mr-3"
            onClick={onPrev}
            disabled={stepActive === 0}
          >Previous</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onNext}
          >Next</button>
        </div>
      ) : (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onReset}
        >Reset</button>
      )}
    </div>
  )
}

export default NavigationButtons