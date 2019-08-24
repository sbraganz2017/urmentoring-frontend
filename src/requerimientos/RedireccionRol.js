export default class RedireccionRol {
    static redirectLogin = (history, perfil) =>{
        if(perfil===1){
            history.push('/estudiante/');
        }else if(perfil===2){
            history.push('/tutor/');
        }else if(perfil===3){
            history.push('/representante/');
        }
    }
}