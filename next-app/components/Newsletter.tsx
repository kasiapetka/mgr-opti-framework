import React, { useState } from "react";
import api from "../api/api-service";

type Props = {
  data: {
    classname: string;
  };
};

const Newsletter = (props: Props) => {
  const { classname } = props.data;
  const [formData, setFormData] = useState({ email: "" });
  const [response, setResponse] = useState<{ message: string }>({
    message: "",
  });

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const res = await api.post("/newsletter", { email: formData });
    setResponse(res);
  };

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.type]: event.target.value.trim(),
    });
  };

  return (
    <section className={classname + " section_newsletter"}>
      <div className="newsletter">
        <div>
          <h2>Sign up for Newsletter</h2>
        </div>
        <div>
          <form onSubmit={handleFormSubmit} className="newsletter_form">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <h3>{response.message}</h3>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
