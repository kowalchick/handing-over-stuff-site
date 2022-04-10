// import React, {useEffect, useState, useRef} from 'react';
// import {Link} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
// // import {getSigninAction} from "../../redux/actions";
//
// import {login} from "../../redux/actions/authAction";
//
//
//
//
// const LogForm = (props) => {
//     // const [email, setEmail] = useState('');
//     // const [password, setPassword] = useState('');
//
//     // const userContext = useSelector(state => state.userContext);
//     // const dispatch = useDispatch();
//     //
//     // const signin = () => {
//     //   dispatch(getSigninAction(email, password));
//     // };
//     //
//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     // }
//     //
//     // useEffect(() => {
//     //     console.log(userContext);
//     // }, [userContext]);
//
//     const required = (value) => {
//         if (!value) {
//             return (
//                 <div>
//                     This field is required!
//                 </div>
//             );
//         }
//     };
//
//     const form = useRef();
//     const checkBtn = useRef();
//
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);
//
//     const { isLoggedIn } = useSelector(state => state.auth);
//     const { message } = useSelector(state => state.message);
//
//     const dispatch = useDispatch();
//
//     const onChangeEmail = (e) => {
//         const email = e.target.value;
//         setEmail(email);
//     };
//
//     const onChangePassword = (e) => {
//         const password = e.target.value;
//         setPassword(password);
//     };
//
//     const handleLogin = (e) => {
//         e.preventDefault();
//
//         setLoading(true);
//
//         form.current.validateAll();
//
//         if (checkBtn.current.context._errors.length === 0) {
//             dispatch(login(email, password))
//                 .then(() => {
//                     props.history.push("/profile");
//                     window.location.reload();
//                 })
//                 .catch(() => {
//                     setLoading(false);
//                 });
//         } else {
//             setLoading(false);
//         }
//     };
//
//     if (isLoggedIn) {
//         return <Link to="/profile" />;
//     }
//
//     return (
//         <section className="sign-box">
//             <div className="sign-title ">
//                 <h1 className="fancy">Log in</h1>
//             </div>
//             <form className="sign-form" autoComplete="off" onSubmit={handleLogin}>
//                 <div className="sign-form-inputs">
//                     <label className="form-label" htmlFor="name">E-mail:</label>
//                     <input
//                         className="form-input"
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                         validations={[required]}
//                     />
//                     <label className="form-label" htmlFor="password">Password:</label>
//                     <input
//                         className="form-input"
//                         id="password"
//                         name="password"
//                         type="password"
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                         validations={[required]}
//                     />
//                 </div>
//                 <div className="sign-btns">
//                         <>
//                             <Link className="sign-link" to="/register/">Sign in</Link>
//                             <button className="sign-btn">Sign out</button>
//                         </>
//                 </div>
//             </form>
//         </section>
//
//     );
// }
//
// export default LogForm;