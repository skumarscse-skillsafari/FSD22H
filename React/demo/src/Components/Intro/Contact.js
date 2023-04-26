function Contact() {
  return (
    <section className="contact">
      <h2>Contact Section</h2>
      <form>
        <p>
          <input type="text" placeholder="Enter your name" />
        </p>
        <p>
          <input type="email" placeholder="Enter your email" />
        </p>
        <p>
          <textarea
            cols="20"
            rows="4"
            placeholder="Enter description"
          ></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
      <hr />
    </section>
  );
}

export default Contact;
