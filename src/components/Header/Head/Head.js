import './Head.css';
import Input from '../../Input/Input';
import Basket from '../Basket/Basket';
import { Link } from 'react-router-dom';

function Head () {
    return (
      <div className="Head">
        <div className="Head-box">
          <img className="Head-logo" src="https://beverlylahayeinstitute.org/wp-content/uploads/2020/07/online-shopping-scaled.jpg" alt='Logo'></img>
          <h1 className="Head-title">Shopрр</h1>
        </div>
        <div className="Head-pages">
          <ul className="Head-list">
            <li className="Head-text">
              <Link to="/" className='Head-link'>Вход</Link>
            </li>
            <li className="Head-text">
              <Link to="/Callback" className='Head-link'>Обратная связь</Link>
            </li>
            <li className="Head-text">
              <Link to="/PageTest" className='Head-link'>Каталог</Link>
            </li>
          </ul>
        </div>
        <div className="Head-basket">
          <Input id="text" type="text" placeholder="Поиск..." name="text" />
          <Basket />
        </div>
      </div>
    )

}

export default Head;