import css  from '../ContactForm/ContactForm.module.css'
// import PropTypes from "prop-types";
let filter =""
const handleChange = (e) => filter =  e.target.value


export const Filter = () => {
    return (
        <label className={css["contact-label"]}>
              Find contact by name    
              <input
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}
                className={css["contact-input"]}
              />
            </label>
    )
}

