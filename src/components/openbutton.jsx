const OpenButton = () => {
    const handleClick = () => {
      window.open('https://anonyvent.xyz', '_blank');
    };
  
    return (
      <button onClick={handleClick}>
        Open AnonyVent
      </button>
    );
  };
  
  export default OpenButton;