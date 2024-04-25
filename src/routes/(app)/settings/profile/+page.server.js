import { redirect } from "@sveltejs/kit";

export const actions = {
    changePassword: async ({locals, request}) => {
        const formData = await request.formData();
        
        const userID = locals.pb.authStore.model.id;
        const username = locals.pb.authStore.model.username;
        const oldPassword = formData.get('password') ?? "";
        const password = formData.get('newPassword') ?? "";
        const passwordConfirm = formData.get('confirmPassword') ?? "";
       // console.log(userID, username, userPass, newPass, confirmPass)
        
        const authData = await locals.pb.collection('users').authWithPassword(username, oldPassword)

        if (locals.pb.authStore.isValid) {
            if (password == passwordConfirm) {
                try {
                    const changePass = await locals.pb.collection("users").update(userID, {password:password}, {passwordConfirm:passwordConfirm});
                } catch(err) {
                    console.log('Error: ', err);
                }
            } else {
                console.log("Error: Password Doesn't Match")
            }
        };
    }
}