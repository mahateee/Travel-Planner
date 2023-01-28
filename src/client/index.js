// TODO: include your scss file here
import './styles/style.scss'
import './styles/button.scss'
import './styles/mediaQuery.scss'
import './styles/all.css'
import { handleSubmit } from './js/formHandler'

const button_submit = document.getElementById('btn-submit');

button_submit.addEventListener("click",(event)=>{
    event.preventDefault();//to prevent default action ( click event ) which cause the refreshing page
    handleSubmit();
})

export {
    handleSubmit
}
