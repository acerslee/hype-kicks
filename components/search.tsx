import { FC, useState, FormEvent, ChangeEvent } from 'react'

interface Props {
  renderNewList: (gender: string, year: string) => void
}

const Search: FC<Props> = ({ renderNewList }) => {
  const [gender, setGender] = useState<string>('none')
  const [year, setYear] = useState<string>('2021')

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    renderNewList(gender, year)
  }

  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setGender(e.target.value)
  }

  const handleYearChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setYear(e.target.value)
  }

  return (
    <form
      className="flex flex-col h-auto text-xl bg-gray-100 p-6 laptop:h-12v laptop:flex-row laptop:justify-center laptop:items-center laptop:space-x-8"
      onSubmit={handleSubmit}
    >
      <select
        className="text-xl p-3 my-2"
        role="tablist"
        id="filter-gender"
        onChange={handleGenderChange}
        defaultValue={'none'}
      >
        <option value="none">Select Gender</option>
        <option value="child">Child</option>
        <option value="infant">Infant</option>
        <option value="preschool">Preschool</option>
        <option value="toddler">Toddler</option>
        <option value="unisex">Unisex</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>

      <select
        className="text-xl p-3 my-2"
        id="filter-year"
        role={'tablist'}
        onChange={handleYearChange}
        defaultValue={'none'}
      >
        <option value="none">Select Year</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
      </select>

      <input
        className="bg-green-900 text-white text-xl p-3 hover:bg-green-700 cursor-pointer"
        type="submit"
        value="Search"
      />
    </form>
  )
}

export default Search
