import React from "react";

const Payment = () => {
  return (
    <div>
      <form>
        <h1>Additional Info</h1>

        <fieldset>
          <label for="name">Gender:</label>
          <input type="text" id="name" name="user_name" />

          <label for="mail">Marital Status:</label>
          <input type="email" id="mail" name="user_email" />

          <label for="contactnumber">PAN Number:</label>
          <input type="text" id="contactno" name="user_number" />
        </fieldset>
      </form>
    </div>
  );
};

export default Payment;
