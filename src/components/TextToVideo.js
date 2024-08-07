import React, { useState } from 'react';
import axios from 'axios';

const TextToVideo = ({ setAuth }) => {
  const [text, setText] = useState('');
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/create-text-video', { text }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`
        }
      });
      setVideoUrl(response.data.videoUrl);
    } catch (error) {
      console.error('Error creating video', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Create Video from Text</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block mb-2">
          <span className="text-gray-700">Text:</span>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Create Video
        </button>
      </form>
      {videoUrl && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Video</h2>
          <video width="320" height="240" controls className="block mt-2">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default TextToVideo;
