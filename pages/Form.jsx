import React, { useState } from 'react';
import 'firebase/database';
import toast from 'react-hot-toast';

function BookSellingForm() {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    price: '',
    condition: '',
    images: '',
    address: '',
    state: '',
    city: '',
    zipCode: '',
    email: '',
    phoneNumber: '',
  });

  const postUserData = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === 'image') {
      const files = event.target.files;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        const base64Image = reader.result.split(',')[1];
        setBookData({ ...bookData, images: base64Image });
      };
    } else if (name === 'phoneNumber') {
      const inputPhoneNumber = value.replace(/\D/g, '');
      if (inputPhoneNumber.length <= 10) {
        setBookData({ ...bookData, [name]: inputPhoneNumber });
      }
    } else {
      setBookData({ ...bookData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      title,
      author,
      price,
      condition,
      images,
      address,
      state,
      city,
      zipCode,
      email,
      phoneNumber,
    } = bookData;
    const res = await fetch(
      'https://rebook-b31a8-default-rtdb.firebaseio.com/bookSellingData.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          author,
          price,
          condition,
          images,
          address,
          state,
          city,
          zipCode,
          email,
          phoneNumber,
        }),
      }
    );
    if (res.ok) {
      setBookData({
        title: '',
        author: '',
        price: '',
        condition: '',
        images: '',
        address: '',
        state: '',
        city: '',
        zipCode: '',
        email: '',
        phoneNumber: '',
      });
      toast.success('Form Submitted. You Will Get An Email From Our Admins Soon');
    } else {
      toast.error('Please Fill The Form Correctly');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="column-form">
        <div className="form-group">
          <label htmlFor="title">Book Name:</label>
          <input
            type="text"
            id=""
            name="title"
            value={bookData.title}
            onChange={postUserData}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id=""
            name="author"
            value={bookData.author}
            onChange={postUserData}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Expected Price (in Rupees):</label>
          <input
            type="text"
            id="price"
            name="price"
            value={bookData.price}
            onChange={postUserData}
            required
            style={{ paddingLeft: '20px' }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="condition">Book Condition:</label>
          <select
            id=""
            name="condition"
            value={bookData.condition}
            onChange={postUserData}
            required
          >
            <option value="">Select condition</option>
            <option value="new">New</option>
            <option value="like-new">Like New</option>
            <option value="very-good">Very Good</option>
            <option value="good">Good</option>
            <option value="acceptable">Acceptable</option>
            <option value="old">Old</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id=""
            name="image"
            accept="image/*"
            onChange={postUserData}
            multiple // allow multiple file selection
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id=""
            name="address"
            value={bookData.address}
            onChange={postUserData}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id=""
            name="city"
            value={bookData.city}
            onChange={postUserData}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select
            id=""
            name="state"
            value={bookData.state}
            onChange={postUserData}
            required
          >
            <option value="">Select state</option>
            <option value="AN">Andaman and Nicobar Islands</option>
            <option value="AP">Andhra Pradesh</option>
            <option value="AR">Arunachal Pradesh</option>
            <option value="AS">Assam</option>
            <option value="BR">Bihar</option>
            <option value="CH">Chandigarh</option>
            <option value="CT">Chhattisgarh</option>
            <option value="DN">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="DL">Delhi</option>
            <option value="GA">Goa</option>
            <option value="GJ">Gujarat</option>
            <option value="HR">Haryana</option>
            <option value="HP">Himachal Pradesh</option>
            <option value="JK">Jammu and Kashmir</option>
            <option value="JH">Jharkhand</option>
            <option value="KA">Karnataka</option>
            <option value="KL">Kerala</option>
            <option value="LD">Lakshadweep</option>
            <option value="MP">Madhya Pradesh</option>
            <option value="MH">Maharashtra</option>
            <option value="MN">Manipur</option>
            <option value="ML">Meghalaya</option>
            <option value="MZ">Mizoram</option>
            <option value="NL">Nagaland</option>
            <option value="OD">Odisha</option>
            <option value="PY">Puducherry</option>
            <option value="PB">Punjab</option>
            <option value="RJ">Rajasthan</option>
            <option value="SK">Sikkim</option>
            <option value="TN">Tamil Nadu</option>
            <option value="TS">Telangana</option>
            <option value="TR">Tripura</option>
            <option value="UP">Uttar Pradesh</option>
            <option value="UK">Uttarakhand</option>
            <option value="WB">West Bengal</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            type="text"
            id=""
            name="zipCode"
            value={bookData.zipCode}
            onChange={postUserData}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id=""
            name="email"
            value={bookData.email}
            onChange={postUserData}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id=""
            name="phoneNumber"
            value={bookData.phoneNumber}
            onChange={postUserData}
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            title="Please enter a valid 10 digit phone number"
            required
          />
        </div>
        <div className="form-group buttons">
          <button type="reset">Reset</button>
          <button type="submit">Sell Book</button>
        </div>
      </form>
    </div>
  );
}

export default BookSellingForm;
