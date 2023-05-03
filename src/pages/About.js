import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/store";


const About = () => {
    const emailInputRef = useRef();
    const nameInputRef = useRef();
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

    const dispatch = useDispatch();
    const storeUserInReduxHandler = () => {
        const name = nameInputRef.current.value;
        dispatch(userActions.addUser(name));
    };
    const userSelector = useSelector((state) => state.user.allUsers);
    const fetchValueFromRedux = () => {
          console.log(userSelector);
    };

  return (
    <>
      <div>About</div>
      <form onSubmit={formSubmitHandler}>
        <label>Enter email of user you want to find</label>
        <input ref={emailInputRef}></input>
        <button type='submit'>Submit</button>
      </form>
      <input placeholder="enter what you want to store in redux" ref={nameInputRef}></input>
      <button type="button"  onClick={storeUserInReduxHandler}>Submit</button>
      <button type="button" onClick={fetchValueFromRedux}>Fetch value from redux</button>
    </>
  );
};

export default About;
