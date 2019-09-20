import React from "react"
import DefaultAvatar from "../../data/shadow.png"

const Avatar = props => {
  const {value, error, onChange} = props

  const onChangeAvatar = event => {
    const reader = new FileReader()
    reader.onload = event => {
      onChange({
        target: {
          name: "avatar",
          value: event.target.result
        }
      })
    }

    reader.readAsDataURL(event.target.files[0])
  }

  return (
    <div>
      <img src={value || DefaultAvatar} alt="" className="w-100"/>
      <div className="custom-file mt-3">
        <input
          type="file"
          className="custom-file-input"
          id="avatar"
          name="avatar"
          placeholder="avatar"
          onChange={onChangeAvatar}
        />
        <label
          className={`custom-file-label ${error ? "error-border" : ""}`}
          htmlFor="avatar"
        >Choose avatar</label>
        {error ? <div className="invalid-feedback">{error}</div> : null}
      </div>
    </div>
  )
}

export default Avatar