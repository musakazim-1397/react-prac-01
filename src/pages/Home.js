import { useRef } from "react";

const Home = () => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const name = nameInputRef.current.value;
        const age = ageInputRef.current.value;
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        const user = {
            name,
            email,
            password,
        };
        fetch("http://localhost:8000/add-user", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) =>{
            if(res.ok){
                return res.json();
            }
        }).then((data) => {
                console.log("User added successfully");
                console.log(data);
        });
    };

  return (
    <>
      <div>Home</div>
      <form
        onSubmit={formSubmitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "25rem",
          height: "45vh",
        }}
      >
        <label>Enter your name</label>
        <input ref={nameInputRef}></input>
        <label>Enter your age</label>
        <input ref={ageInputRef}></input>
        <label>Enter your email</label>
        <input ref={emailInputRef}></input>
        <label>Enter your password</label>
        <input ref={passwordInputRef}></input>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default Home;
