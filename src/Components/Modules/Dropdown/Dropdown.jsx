import "./dropdown.css";

const Dropdown = ({ selectedOption, setSelectedOption }) => {
  const Options = ["Dropdown 1", "Dropdown 2", "Dropdown 3", "Dropdown 4"];

  const handlechange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div>
        <select
          className="dropdownContainer"
          id="dropdown"
          value={selectedOption}
          onChange={handlechange}
        >
          <option value="Dropdown" disabled>
            Dropdown
          </option>

          {Options.map((menu, index) => (
            <option key={index} value={menu}>
              {menu}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
