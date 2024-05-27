const UploadFile = ({ onChange }) => {
  return (
    <>
      <p className="text-xl">Upload your Excel file to continue</p>
      <div className='mt-6'>
        <input type="file" onChange={onChange} className="file-input file-input-bordered file-input-success w-full max-w-xs cursor-pointer" />
      </div>
    </>
  );
};

export default UploadFile;
