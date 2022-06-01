export const signup = () => {

}

export const otpVerification = () => {
    
}

export const userInfo = (_: never, {userDetails}: any) => {
    console.log(userDetails);
    return {
        message: "success",
    }
}