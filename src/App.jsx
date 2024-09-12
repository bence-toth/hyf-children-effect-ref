const Button = ({ children }) => {
  return (
    <button
      onClick={() => {
        alert("Hello world!");
      }}
    >
      {children}
    </button>
  );
};

const App = () => {
  return (
    <div>
      <Button>
        Hello, this is button number <span style={{ color: "red" }}>1</span>
      </Button>
      <Button>
        Hello, this is button number <span style={{ color: "green" }}>2</span>
      </Button>
      <Button>
        Hello, this is button number <span style={{ color: "blue" }}>3</span>
      </Button>
    </div>
  );
};

export default App;
