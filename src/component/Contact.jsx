const Contact = () => {
  return (
    <div>
      <h1 className="mt-20 text-center text-3xl font-bold text-slate-700">
        Contact
      </h1>
      <form>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="2" required></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
