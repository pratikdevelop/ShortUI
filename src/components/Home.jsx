import React, { useState, useEffect } from "react";
import axiosConfig from "./axios-config";

const Home = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [shortUrls, setShortUrls] = useState([]);
  const [shorts, setShorts] = useState([]);
  const [viewingShorts, setViewingShorts] = useState(true); // Toggle state
  const [shortLink, setShortLink] = useState("");
  const [shortDownloadUrl, setShortDownloadUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosConfig.post(
        "/process-video",
        {
          url: videoUrl,
        }
      );
      setShortUrls(response.data.fileUrls);
    } catch (error) {
      console.error("Error in generating shorts:", error);
    }
  };

  const handleShortLinkSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosConfig.post(
        "/download-short",
        {
          url: shortLink,
        }
      );
      setShortDownloadUrl(response.data.fileUrl);
    } catch (error) {
      console.error("Error in downloading short:", error);
    }
  };

  useEffect(() => {
    const fetchShorts = async () => {
      try {
        const response = await axiosConfig.get(
          "/list-videos"
        );
        setShorts(response.data.shorts);
      } catch (error) {
        console.error("Error in fetching shorts:", error);
      }
    };
    fetchShorts();
  }, []);

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCompleteVideoDownload = async () => {
    try {
      const response = await axiosConfig.post(
        "/download-complete-video",
        {
          url: videoUrl,
        }
      );
      handleDownload(response.data.fileUrl);
    } catch (error) {
      console.error("Error in downloading complete video:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        YouTube Video Downloader
      </h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="block mb-2">
          <span className="text-gray-700">YouTube Video URL:</span>
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </label>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Generate Shorts
        </button>
      </form>

      <div className="flex items-center mb-4">
        <span className="mr-2 text-gray-700">
          {viewingShorts
            ? "View and Download Shorts"
            : "Download Complete Video"}
        </span>
        <label className="inline-flex relative items-center cursor-pointer">
          <input
            type="checkbox"
            checked={viewingShorts}
            onChange={() => setViewingShorts(!viewingShorts)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
        </label>
      </div>

      {viewingShorts ? (
        <div>
          {shortUrls.length > 0 && (
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-4">
                Preview and Download Your Shorts
              </h2>
              {shortUrls.map((url, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold">Short {index + 1}</h3>
                  <video
                    width="320"
                    height="240"
                    controls
                    className="block mt-2"
                  >
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    onClick={() => handleDownload(url)}
                    className="mt-2 text-blue-500 hover:underline"
                  >
                    Download Short {index + 1}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Download Complete Video
          </h2>
          <button
            onClick={handleCompleteVideoDownload}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Download Complete Video
          </button>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Download YouTube Shorts Directly
        </h2>
        <form onSubmit={handleShortLinkSubmit} className="mb-4">
          <label className="block mb-2">
            <span className="text-gray-700">YouTube Short URL:</span>
            <input
              type="text"
              value={shortLink}
              onChange={(e) => setShortLink(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Download Short
          </button>
        </form>
        {shortDownloadUrl && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Download Link:</h3>
            <a
              href={shortDownloadUrl}
              className="text-blue-500 hover:underline"
              download
            >
              Download Your Short Video
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
