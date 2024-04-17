import React from "react";

const CustomerInfo = () => {
  return (
    <div>
      <form>
        <h1>Customer Info</h1>

        <fieldset>
          <label for="name">Name:</label>
          <input type="text" id="name" name="user_name" />

          <label for="mail">Email:</label>
          <input type="email" id="mail" name="user_email" />

          <label for="contactnumber">Contact No:</label>
          <input type="text" id="contactno" name="user_number" />
        </fieldset>
      </form>
    </div>
  );
};

export default CustomerInfo;
