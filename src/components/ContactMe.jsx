import React, { useState } from "react";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={FormData.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </form>
    </div>
  );
}
