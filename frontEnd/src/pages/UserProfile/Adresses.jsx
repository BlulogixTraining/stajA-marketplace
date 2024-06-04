const Adresses = ({ data }) => {
  const addresses = data || [];
  return (
    <>
      {addresses?.map((address) => (
        <div className="card" key={address.name}>
          <div className="card-body">
            <h5 className="card-title">{address.name}</h5>
            <p className="card-text">{address.address}</p>
            <p className="card-text">{address.phone}</p>
            <p className="card-text">{address.email}</p>
          </div>
        </div>
      ))}
    </>
  );
};
export default Adresses;
