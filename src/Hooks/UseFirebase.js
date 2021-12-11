import { useEffect, useState } from 'react';
import InitialFirebase from '../Pages/Home/Login/Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


InitialFirebase();
const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setisLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [Admin, setAdmin] = useState(false)

    const auth = getAuth()
    const googleprovider = new GoogleAuthProvider();

    const Signingoogle = (location, history) => {
        setisLoading(true)
        signInWithPopup(auth, googleprovider)
            .then(result => {

                const user = result.user
                saveUser(user.email, user.displayName, 'PUT')
                setAuthError('')
                const destination = location?.state?.form || '/'
                history.replace(destination)

            })
            .catch((error) => {

                setAuthError(error.message)

            })
            .finally(() => setisLoading(false));

    }


    //Register user or create user function
    const registerUser = (email, password, name, history) => {
        setisLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const newUser = { email, displayName: name }
                setUser(newUser)
                //save user to database
                saveUser(email, name, 'POST')
                //send name to firebase after 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message)


            })
            .finally(() => setisLoading(false));
    }

    //User login function
    const LoginUser = (email, password, location, history) => {
        setisLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.form || '/'
                history.replace(destination)
                setAuthError('')
            })
            .catch((error) => {
                const errorCode = error.code;
                setAuthError(error.message)
            })
            .finally(() => setisLoading(false));


    }

    //observer user state 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setisLoading(false)
        });
        return () => unsubscribe;

    }, [])


    //user logout function
    const Logout = () => {
        setisLoading(true)
        signOut(auth).then(() => {

        }).catch((error) => {
            setAuthError(error.message)
        })
            .finally(() => setisLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://nameless-chamber-77947.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    //admin check
    useEffect(() => {
        fetch(`https://nameless-chamber-77947.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    console.log(user)
    return {
        user,
        Admin,
        setisLoading,
        registerUser,
        LoginUser,
        Logout,
        authError,
        isLoading,
        Signingoogle
    }

};

export default UseFirebase;