const Packages = () => {
  const packages = [
    { id: 1, name: 'Bali Honeymoon', price: '₹1,39,999', duration: '5N/6D' },
    { id: 2, name: 'Thailand Explorer', price: '₹79,999', duration: '4N/5D' },
    { id: 3, name: 'Dubai Getaway', price: '₹89,999', duration: '4N/5D' }
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Packages</h2>
      <div className="row">
        {packages.map(pkg => (
          <div key={pkg.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{pkg.name}</h5>
                <p className="card-text">Duration: {pkg.duration}</p>
                <p className="card-text">Price: {pkg.price}</p>
                <a href="/contact" className="btn btn-outline-primary">Book Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
