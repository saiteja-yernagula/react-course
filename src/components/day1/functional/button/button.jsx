const NestedConditions = () => {
  const isLoggedIn = true;
  const marks = 85;

  return (
    <div>
      {
        isLoggedIn ? (
          <div>
            <h2>Welcome back!</h2>
            {
              marks > 90 ? <p>Your grade is A+</p> :
              marks > 80 ? <p>Your grade is A</p> :
              <p>Keep trying!</p>
            }
          </div>
        ) : (
          <h3>Please log in to see your result</h3>
        )
      }
    </div>
  );
};
export default NestedConditions;