import { useState } from 'react';

interface Props{
  renderNewList: Function
}

const Search: React.FC<Props> = ({ renderNewList }) => {

  const [gender, setGender] = useState<string>("");
  const [year, setYear] = useState<number>(2021)

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    renderNewList(gender, year)
  }

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value)
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(e.target.value)
  };


  return(
    <form onSubmit = {handleSubmit}>
      <label htmlFor = "filter-gender">
        <select id = "filter-gender" onChange = {handleGenderChange} defaultValue = {"none"}>
          <option value = "none">Select</option>
          <option value = "child">Child</option>
          <option value = "infant">Infant</option>
          <option value = "preschool">Preschool</option>
          <option value = "toddler">Toddler</option>
          <option value = "unisex">Unisex</option>
          <option value = "men">Men</option>
          <option value = "women">Women</option>
        </select>
      </label>

      <label htmlFor = "filter-year">
        <select id = "filter-year" onChange = {handleYearChange} defaultValue = {"none"}>
          <option value = "none">Select</option>
          <option value = "2021">2021</option>
          <option value = "2020">2020</option>
          <option value = "2019">2019</option>
          <option value = "2018">2018</option>
          <option value = "2017">2017</option>
        </select>
      </label>
      <input type = "submit" value = "Submit" />
    </form>
  )
};

export default Search;