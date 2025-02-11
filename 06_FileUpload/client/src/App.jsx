import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image
  const [imageURL, setImageURL] = useState(""); // State to store the uploaded image URL

  const handleUpload = async (file) => {
    const formData = new FormData(); // Create a new FormData object
    formData.append("file", file); // Append the file to FormData

    try {
      const response = await axios.post(
        "http://localhost:4000/imageUpload",
        formData,
      );
      console.log("Image uploaded successfully", response.data);
      const uploadedImageURL = response.data.imageURL;
      setImageURL(uploadedImageURL); // Set the uploaded image URL
      alert(`Image uploaded successfully at: ${uploadedImageURL}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };
   

  console.log(selectedImage);
  console.log(imageURL);
  
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // Create a temporary URL for the selected file
      setSelectedImage(imageURL); // Set the selected image URL for preview
      handleUpload(file); // Upload the file
    }
  };

  return (
    <>
      <div className="container">
        <h1>Image Upload and Preview</h1>
        <div className="upload-section">
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/jpeg, image/png"
            placeholder="Select a file"
            name="file"
          />
        </div>

        {/* Image Preview Section */}
        {/* {selectedImage && (
          <div className="preview-section">
            <h2>Selected Image Preview</h2>
            <img src={selectedImage} alt="Selected" className="preview-image" />
          </div>
        )} */}

        {/* Uploaded Image Section */}
        {imageURL && (
          <div className="uploaded-section">
            <h2>Uploaded Image</h2>
            <img src={imageURL} alt="Uploaded" className="uploaded-image" />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

// import "./App.css";
// import axios from "axios";

// function App() {
//   const handleUpload = async (file) => {
//     const formData = new FormData(); // Create a new FormData object
//     formData.append("file", file); // Append the file to FormData

//     // // Debugging: Inspect FormData contents
//     // for (const [key, value] of formData.entries()) {
//     //   console.log(key, value);
//     // }

//     try {
//       const response = await axios.post(
//         "http://localhost:4000/imageUpload",
//         formData,
//       );
//       console.log("Image uploaded successfully", response.data);
//       const imageURL = response.data.imageURL;
//       alert(`Image uploaded successfully at: ${imageURL}`);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <div>
//         <input
//           type="file"
//           onChange={(e) => {
//             // console.log("File selected : ", e.target); // HTML input element
//             // console.log("File selected : ", e.target.files); // FileList object
//             console.log(e.target.files[0]); // File object with metadata
//             handleUpload(e.target.files[0]); // Pass the file to handleUpload
//           }}
//           accept="image/jpeg, image/png"
//           placeholder="Select a file"
//           name="file"
//         />
//       </div>
//     </>
//   );
// }

// export default App;
