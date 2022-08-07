import { useScript } from "@/hooks/useScript";
import jwtDecode from "jwt-decode"; // yarn add jwt-decode

declare const google: any

export default function GoogleLogin({
    handleCredentialResponse = (response : any) => { 
      console.log ("ENCODED JWT ID TOKEN: " + response.credential)
      const decodeUser: any = (jwtDecode(response.credential))
      console.log(decodeUser)
      return 
      // googleLoginApi(response.credential, decodeUser)
  }}) {
  useScript('https://accounts.google.com/gsi/client', 
  () => {
    google.accounts.id.initialize({
      client_id:'184427714626-58o0i6gnprvt232uov9ikt2fbp4hhsis.apps.googleusercontent.com',
      callback: handleCredentialResponse
  })
    google.accounts.id.renderButton(
      document.getElementById('buttonDiv') as HTMLButtonElement,
      {
        theme: "outline", size: "large",
        type: 'standard', text: "signin_with"
      }
    )
    const button = document.getElementById('signout_button') as HTMLButtonElement
    button.onclick = () =>{
    google.accounts.id.disableAutoSelect()
    }
    
  });

  return (
  <>
    <div id = "buttonDiv" ></div>
    <div id = "signout_button"></div>
  </>)
  
}



