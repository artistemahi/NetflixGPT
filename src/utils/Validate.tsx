
const Validate = (email, password) => {
  const ISpasswordcorrect =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const ISemailcorrect =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(password);
    
        if(!ISpasswordcorrect)  return "Password is Not correct";
        if(!ISemailcorrect)  return "Email is Not correct";
    return(null);
};

export default Validate;
