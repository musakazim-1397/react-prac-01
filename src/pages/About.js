import { useRef } from "react";

const About = () => {
    const emailInputRef = useRef();
    const formSubmitHandler = (event) => {
        event.preventDefault();
        const email = emailInputRef.current.value;
        fetch(`http://localhost:8000/get-user`,{
            method: "POST",
            body: JSON.stringify({email}),
            headers: {
                "Content-Type": "application/json",
            }
        }).then((res) =>{
            if(res.ok){
                console.log('res was ok');
                return res.json();
            }
        }).then((data) => {
                console.log("User found successfully");
                console.log(data);
        }).catch((err) => {
            console.log(err);
        });
    };
  return (
    <>
      <div>About</div>
      <form onSubmit={formSubmitHandler}>
        <label>Enter email of user you want to find</label>
        <input ref={emailInputRef}></input>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default About;
