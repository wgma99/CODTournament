import '../css/PaymentMethods.css';
import { useState } from 'react';

export default function PaymentMethods() {
    const [ methodsCountry, setMethodsCountry] = useState([]);
    const [ userData, setUserData ] = useState({namePlayer: '', age: '', user: '', countryPlayer: '', payMethod: ''});

    const VEmethods = ['Banco de Venezuela', 'Pago Móvil', 'Binance Pay'];
    const USAmethods = ['Zelle', 'Bank Of America', 'Binance Pay'];
    const COLmethods = ['Bancolomba', 'Nequi', 'Binance Pay'];
    const PEmethods = ['BCP', 'Yape', 'Binance Pay'];


    const changeMethods = (country) => {
        switch (country) {
            case 'VE':
                setMethodsCountry(VEmethods);
                setUserData({...userData, countryPlayer: country});
                break;

            case 'USA':
                setMethodsCountry(USAmethods);
                setUserData({...userData, countryPlayer: country});
                break;
        
            case 'COL':
                setMethodsCountry(COLmethods);
                setUserData({...userData, countryPlayer: country});
                break;

            case 'PE':
                setMethodsCountry(PEmethods);
                setUserData({...userData, countryPlayer: country});
                break;
        }
    }

  return (
      <section id='paymentMethods' className='section-paymentMethods'>
        <form>
            <div className="paymentMethods--titleContainer">
                <h2 className='paymentMethods--title'>Métodos de Pago</h2> <hr />
                <p className='paymentMethods--content'>Para ser parte de nuestros torneos debes ingresar tus dats y realizar tu pago, elije el método de pago que aplique según tu país y serás contactado por nosotros.</p>
            </div>
            <label htmlFor="name" className='paymentMethods--label'>
                <span className='nameIcon'></span>
                <input name='name' id='name' className='paymentMethods--inputs' onChange={(e) => {setUserData({...userData, namePlayer: e.target.value})}} type="text" placeholder='Nombre y Apellido' />
            </label>

            <label htmlFor="age" className='paymentMethods--label'>
                <span className='ageIcon'></span>
                <input name='age' id='age' className='paymentMethods--inputs' onChange={(e) => {setUserData({...userData, age: e.target.value})}} type="number" placeholder='Edad' />
            </label>

            <label htmlFor="user" className='paymentMethods--label'>
                <span className='userIcon'></span>
                <input name='user' id='user' className='paymentMethods--inputs' onChange={(e) => {setUserData({...userData, user: e.target.value})}} type="text" placeholder='COD Mobile user'/>
            </label>
            
            <div className='selectContainer'>
                <select className='paymentMethods--selects' onChange={(e) => {changeMethods(e.target.value)}} name="country" id="country">
                    <option selected disabled value="Country">País</option>
                    <option value="VE">Venezuela</option>
                    <option value="USA">Estados Unidos</option>
                    <option value="COL">Colombia</option>
                    <option value="PE">Perú</option>
                </select>
            </div>

            <div className='selectContainer'>
                <select className='paymentMethods--selects' onChange={(e) => {setUserData({...userData, payMethod: e.target.value})}} name="paymentMethod" id="paymentMethod">
                    <option selected disabled value="PaymentMethod">Métodos de Pago</option>
                    {
                        methodsCountry.map((method, id) => {
                            return(<option key={id} value={method}>{method}</option>)
                        })
                    }
                </select>
            </div>
            <a className='sendButtom' target='_blank' href={`https://api.whatsapp.com/send?phone=19014949315&text=Hola%20soy%20${userData.namePlayer},%20me%20gustaría%20participar%20desde%20${userData.countryPlayer},%20deseo%20realizar%20el%20pago%20a%20través%20de%20${userData.payMethod}.%20(user:%20${userData.user})`}>Enviar</a>
        </form>
    </section>
  )
}
