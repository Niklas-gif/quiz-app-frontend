import { useToast } from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-sugar.css'
export class ToastService {
    private $toast = useToast()

    wrongLoginCredentials() {
        let instance = this.$toast.error('Password or Email is invalid!')
            setTimeout(()=>{
                instance.dismiss()
                this.$toast.clear()
            },5000)
    } 

    displaySuccessLogin() {
        let instance = this.$toast.success('Welcome!')
            setTimeout(()=>{
                instance.dismiss()
                this.$toast.clear()
            },5000)
    } 

    serverUnavailable() {
        let instance = this.$toast.error('Server is not available!')
            setTimeout(()=>{
                instance.dismiss()
                this.$toast.clear()
            },5000)
    }

    loginWarning() {
        let instance = this.$toast.warning('You have to be loged in to do that!')
        setTimeout(()=>{
            instance.dismiss()
            this.$toast.clear()
        },5000)
    }
}