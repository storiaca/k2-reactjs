function Loader() {
  return (
    // <div
    //   className="inline-block w-20 h-20 after:content-[' '] after:block after:w-[64px] after:h-[64px] after:m-[8px] after:rounded-[50%] after:order-[6px] after:border-[solid] after:border-[teal]"
    //   style={{ animation: "spinner 1.2s linear infinite" }}
    // ></div>
    <div
      style={{
        display: "inline-block",
        width: "64px",
        height: "64px",
        border: "5px solid #ccc",
        borderTopColor: "#007bff",
        borderRadius: "50%",
        animation: "spinner 1s linear infinite",
      }}
    ></div>
    // <div className="spinner"></div>
  );
}

export default Loader;
