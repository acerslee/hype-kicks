import { useState } from 'react';

interface Props{
  renderNewList: Function
}



const Search: React.FC<Props> = ({ renderNewList }) => {

  const [gender, setGender] = useState<string>("none");
  const [year, setYear] = useState<string>("2021")

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
    <form
      className = "flex justify-center items-center h-auto text-xl space-x-8 bg-gray-100 p-6 phone:flex-col laptop:h-12v"
      onSubmit = {handleSubmit}>
      <select className = "text-xl p-3 phone:w-full" id = "filter-gender" onChange = {handleGenderChange} defaultValue = {"none"}>
        <option value = "none">Select Gender</option>
        <option value = "child">Child</option>
        <option value = "infant">Infant</option>
        <option value = "preschool">Preschool</option>
        <option value = "toddler">Toddler</option>
        <option value = "unisex">Unisex</option>
        <option value = "men">Men</option>
        <option value = "women">Women</option>
      </select>

      <select className = "text-xl p-3" id = "filter-year" onChange = {handleYearChange} defaultValue = {"none"}>
        <option value = "none">Select Year</option>
        <option value = "2021">2021</option>
        <option value = "2020">2020</option>
        <option value = "2019">2019</option>
        <option value = "2018">2018</option>
        <option value = "2017">2017</option>
      </select>

      <input
        className = "bg-green-900 text-white text-xl p-3"
        type = "submit"
        value = "Search"
      />
    </form>
  )
};

export default Search;
