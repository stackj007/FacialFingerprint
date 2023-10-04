import './ImageLinkForm.css'

const ImageLinkForm = () => {
  return (
    <div className="p-5 w-[700px] mx-auto">
      <p className="text-center font-bold text-lg m-5">
        This will detect faces in your pictures, give it a
        try
      </p>

      <div className="Form flex justify-center shadow-md p-4 rounded-md">
        <input
          className="w-[55%]  border-2 border-gray-300 rounded-md"
          type="text"
        />
        <button className="w-[15%] ml-2  bg-blue-500 text-white font-bold rounded-md">
          Detect
        </button>
      </div>
    </div>
  )
}

export default ImageLinkForm
