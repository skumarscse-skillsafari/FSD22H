import { useState } from "react";
const Form = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    address: "",
    subject: "",
    addons: [],
    gender: false,
  });
  const handleForm = (e) => {
    let { value } = e.target; // target = { name: "", value: ""}
    if (e.target.type === "checkbox") {
      let data = form.addons;
      data.push(value);
      setForm((form) => {
        return {
          ...form,
          addons: data,
        };
      });
    } else {
      setForm((form) => {
        return {
          ...form,
          [e.target.name]: value,
        };
      });
    }
    // console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <h2>Form Component</h2>
      {/* 
        1. Firstname - input type="text"
        2. Lastname - input type="text"
        3. Email - input type="email"
        4. Phonenumber - input type="number"
        5. Address - textarea
        6. Subjects - Select
        7. Addons - checkbox
        8. Gender - Radio
      */}
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            name="firstname"
            placeholder="Enter Firstname"
            value={form.firstname}
            onChange={handleForm}
          />
        </p>
        <p>
          <input
            type="text"
            name="lastname"
            placeholder="Enter Lastname"
            value={form.lastname}
            onChange={handleForm}
          />
        </p>
        <p>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleForm}
          />
        </p>
        <p>
          <input
            type="number"
            name="phonenumber"
            placeholder="Enter Phone Number"
            value={form.phonenumber}
            onChange={handleForm}
          />
        </p>
        <p>
          <textarea
            cols="22"
            rows="3"
            placeholder="Enter Address"
            value={form.address}
            name="address"
            onChange={handleForm}
          ></textarea>
        </p>
        <p>
          <label>Select Subject:</label>
          <select name="subject" value={form.subject} onChange={handleForm}>
            <option>English</option>
            <option>Maths</option>
            <option>Physics</option>
            <option>Chemistry</option>
          </select>
        </p>
        <p>
          <label>Avail Adons:</label>
          <input type="checkbox" onChange={handleForm} value="Bus" />
          Bus
          <input type="checkbox" onChange={handleForm} value="Hostel" /> Hostel
          <input type="checkbox" onChange={handleForm} value="Food" /> Food
        </p>
        <p>
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={form.gender === "Male"}
            onChange={handleForm}
          />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={form.gender === "Female"}
            onChange={handleForm}
          />
        </p>
        <hr />
        <button>Submit</button>
        {"   "}
        <button>Clear</button>
      </form>
    </div>
  );
};

export default Form;
