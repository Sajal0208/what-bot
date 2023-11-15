import { useSetRecoilState } from 'recoil'
import { userState } from '../atoms/user'
import { useEffect } from 'react'
import axios from 'axios'

const InitUser = () => {
    const setUser = useSetRecoilState(userState)
    const init = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/me`)
            const user = response.data;
            const { email } = user;

            if (!email) {
                setUser({
                    isLoading: false,
                    userEmail: null,
                })
                return
            }

            setUser({
                isLoading: false,
                userEmail: email,
            })

        } catch (e) {
            setUser({
                isLoading: false,
                userEmail: null,
            })
            console.log(e);
        }
    }

    useEffect(() => {
        init();
    }, []);

    return null
}

export default InitUser