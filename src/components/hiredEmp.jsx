import React, { useState } from 'react';

const HiredEmp = () => {
  const [formData, setFormData] = useState({
    _id: '',
    desc: '',
    exp: '',
    profile: '',
    techs: []
  });
  const [techInput, setTechInput] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleTechChange = (e) => {
    setTechInput(e.target.value);
  };

  const addTech = () => {
    if (techInput.trim()) {
      setFormData({
        ...formData,
        techs: [...formData.techs, techInput]
      });
      setTechInput('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      _id: formData._id,
      desc: formData.desc,
      exp: formData.exp,
      profile: formData.profile,
      techs: formData.techs
    };

    try {
      const response = await fetch('http://localhost:8080/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert('Employee data submitted successfully!');
        setFormData({ _id: '', desc: '', exp: '', profile: '', techs: [] });
      } else {
        alert('Failed to submit data. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Submit Employee Data</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">ID:</label>
          <input
            type="text"
            name="_id"
            value={formData._id}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Technologies:</label>
          <input
            type="text"
            value={techInput}
            onChange={handleTechChange}
            placeholder="Add a technology"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            type="button"
            onClick={addTech}
            className="mt-2 bg-blue-500 text-white py-1 px-3 rounded-md"
          >
            Add Tech
          </button>
          <div className="mt-2">
            <strong>Current Tech Stack: </strong>
            {formData.techs.join(', ')}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description:</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Experience:</label>
          <input
            type="text"
            name="exp"
            value={formData.exp}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Profile:</label>
          <textarea
            name="profile"
            value={formData.profile}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HiredEmp;
