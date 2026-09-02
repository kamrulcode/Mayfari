import { useState } from "react";
import "./Addresses.scss";

function Addresses() {
  const [addresses, setAddresses] = useState(() => {
    const saved = localStorage.getItem("mayfair-addresses");

    return saved ? JSON.parse(saved) : [];
  });

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleDelete = (id) => {
    const updatedAddresses = addresses.filter((address) => address.id !== id);

    saveAddresses(updatedAddresses);
  };

  const handleSetDefault = (id) => {
    const updatedAddresses = addresses.map((address) => ({
      ...address,
      isDefault: address.id === id,
    }));

    saveAddresses(updatedAddresses);
  };

  const handleEdit = (address) => {
    setFormData({
      name: address.name,
      phone: address.phone,
      address: address.address,
      city: address.city,
      postalCode: address.postalCode,
    });

    setEditingId(address.id);
    setShowForm(true);
  };
  const saveAddresses = (updatedAddresses) => {
    setAddresses(updatedAddresses);

    localStorage.setItem("mayfair-addresses", JSON.stringify(updatedAddresses));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId !== null) {
      const updatedAddresses = addresses.map((address) =>
        address.id === editingId
          ? {
              ...address,
              ...formData,
            }
          : address,
      );

      saveAddresses(updatedAddresses);

      setEditingId(null);
    } else {
      const newAddress = {
        id: crypto.randomUUID(),
        ...formData,
        isDefault: addresses.length === 0,
      };

      saveAddresses([...addresses, newAddress]);
    }

    setFormData({
      name: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
    });

    setShowForm(false);
  };

  return (
    <main className="addresses-page">
      <div className="addresses-container">
        <div className="addresses-header">
          <div>
            <span>ACCOUNT</span>
            <h1>Saved Addresses</h1>
          </div>

          <button onClick={() => setShowForm(true)}>+ Add Address</button>
        </div>

        {addresses.length === 0 ? (
          <div className="empty-addresses">
            <h2>No saved addresses</h2>

            <p>Save your delivery address for a faster checkout.</p>

            <button onClick={() => setShowForm(true)}>
              Add Your First Address
            </button>
          </div>
        ) : (
          <div className="address-grid">
            {addresses.map((address) => (
              <div className="address-card" key={address.id}>
                <div className="address-card-top">
                  <div>
                    <h3>{address.name}</h3>

                    {address.isDefault && (
                      <span className="default-badge">DEFAULT</span>
                    )}
                  </div>
                </div>

                <p>{address.phone}</p>

                <p>{address.address}</p>

                <p>
                  {address.city}, {address.postalCode}
                </p>

                <div className="address-actions">
                  {!address.isDefault && (
                    <button onClick={() => handleSetDefault(address.id)}>
                      Set Default
                    </button>
                  )}

                  <button onClick={() => handleEdit(address)}>Edit</button>

                  <button onClick={() => handleDelete(address.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {showForm && (
          <div className="address-form-wrapper">
            <form onSubmit={handleSubmit}>
              <h2>{editingId ? "Edit Address" : "Add New Address"}</h2>

              <input
                type="text"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="address"
                placeholder="Street address"
                value={formData.address}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="postalCode"
                placeholder="Postal code"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />

              <div className="form-actions">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);

                    setFormData({
                      name: "",
                      phone: "",
                      address: "",
                      city: "",
                      postalCode: "",
                    });
                  }}
                >
                  Cancel
                </button>

                <button type="submit">Save Address</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}

export default Addresses;
