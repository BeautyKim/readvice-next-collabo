import { accessClient } from "../controllers"

export const googleOauthApi = {
  loigin: async(handleCredentialResponse: {}, userInfo: any ) => {
    try{
      userInfo.token= handleCredentialResponse
      const response  = await accessClient.post ('/users/getToken', userInfo)
    } catch(err){
      return err
    }
  }
}