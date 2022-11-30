import logo from '../logo.svg';
const Logito = () =>{

    return(
        <div className='Seccion-logito' id='Footer Seccion' style={{display:'flex',width:'100%', paddingTop:'5px',color:'white'}}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 style={{fontSize:'xx-small'}}>Proyecto Integrador - Humaya</h1>
        </div>
    );
}
    
    export default Logito;