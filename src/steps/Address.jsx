import React from "react";

const Address = () => {
  return (
    <div>
      <form>
        <h1>Address</h1>

        <fieldset>
          <label for="mail">Area:</label>
          <input type="text" id="mail" name="user_email" />

          <label for="contactnumber">City:</label>
          <input type="text" id="contactno" name="user_number" />

          <label for="contactnumber">Pin Code:</label>
          <input type="number" id="contactno" name="user_number" />
        </fieldset>
      </form>
    </div>
  );
};

export default Address;
