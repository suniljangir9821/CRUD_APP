import { useState } from "react";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !address) {
        alert("Please fill in all fields.");
        return;
    }

    const user = {
      name,
      email,
      address,
    };

    if (edit) {
      const updatedUsers = [...users];
      updatedUsers[active] = user; 
      setUsers(updatedUsers);
      setActive(null);
      setEdit(false);
    } else {
      setUsers([...users, user]);
    }

    setName("");
    setEmail("");
    setAddress("");
  };

  const editHandler = (index) => {
    const user = users[index];

    setName(user.name);
    setEmail(user.email);
    setAddress(user.address);

    setActive(index);
    setEdit(true);
  };

  const deleteHandle = (index) => {
    if (window.confirm("Are you sure to delete")) {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
    }
  };

  return (
    <div className="App">
      <h1 className="text-center mt-2">CRUD APP</h1>
      <div className="container mb-2">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-10 col-md-8">
            <form onSubmit={handleSubmit}>
              <div className="form-group my-2">
                <label htmlFor="">Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="">Email</label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="">Address</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <button className="btn btn-success form-control my-2">
                {edit ? "Update" : "Add"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <table className="table ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => editHandler(index)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteHandle(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
