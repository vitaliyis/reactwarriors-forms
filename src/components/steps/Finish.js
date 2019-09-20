import React from "react"
import countries from "../../data/countries";
import cities from "../../data/cities";

const getCountries = id => {
  let country = countries.find(country => country.id === Number(id));
  return country && country.name
}

const Finish = props => {
  const {values} = props

  return (
    <div>
      <img src={values.avatar} alt="" className="w-100"/>
      <div className="mt-3">
        <label className="finish-label">Firstname:</label>
        {values.firstname}
      </div>
      <div>
        <label className="finish-label">Lastname:</label>
        {values.lastname}
      </div>
      <div>
        <label className="finish-label">Gender:</label>
        {values.gender}
      </div>
      <div>
        <label className="finish-label">Email:</label>
        {values.email}
      </div>
      <div>
        <label className="finish-label">Mobile:</label>
        {values.mobile}
      </div>
      <div>
        <label className="finish-label">Country:</label>
        {getCountries(values.country)}
      </div>
      <div>
        <label className="finish-label">City:</label>
        {cities[values.city].name}
      </div>
    </div>
  )
}

export default Finish