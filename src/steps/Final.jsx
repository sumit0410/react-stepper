import React, { useState } from "react";

const Final = () => {
  const [submit, setSubmit] = useState(false);
  return (
    <div>
      <form>
        <h1>Confirmation</h1>

        <fieldset style={{ display: "flex" }}>
          <input type="checkbox" id="name" name="user_name" />
          <label for="mail">
            All the information that i have provided was correct
          </label>
        </fieldset>
      </form>
    </div>
  );
};

export default Final;
