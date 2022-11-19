import { useContext, useState } from "react";
import UserContext from "../../../../contexts/userContext";

function useSignIn() {
    const [user, setUser] = useState(null);
    const userContext = useContext(UserContext);

    function onSignIn() {
        userContext.signInUser()
            .then((res) => {
                if (res != null) {
                    setUser({name: res.displayName, uid: res.uid});
                }
                else {
                    return [];
                }
            })
            .catch((err) => console.log(err));
    }

    return { user, onSignIn };
}

export default useSignIn;