function UserInputs({ setValues }) {
  function handleChange(event) {
    const { value, name } = event.target;
    setValues((prev) => ({ ...prev, [name]: parseInt(value) }));
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="initial">
          Initial Investment
          <input
            onChange={handleChange}
            name="initialInvestment"
            id="initial"
            type="number"
          />
        </label>

        <label htmlFor="annual">
          Annual Investment
          <input
            onChange={handleChange}
            name="annualInvestment"
            id="annual"
            type="number"
          />
        </label>
      </div>

      <div className="input-group">
        <label htmlFor="expected">
          Expected Return
          <input
            onChange={handleChange}
            name="expectedReturn"
            id="expected"
            type="number"
          />
        </label>

        <label htmlFor="duration">
          Duration
          <input
            onChange={handleChange}
            name="duration"
            id="duration"
            type="number"
          />
        </label>
      </div>
    </div>
  );
}

export default UserInputs;
