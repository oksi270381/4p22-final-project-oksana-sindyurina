import Input from '../../components/Input/Input';
import './Callback.css';
import { Link } from "react-router-dom"
import { useEffect } from 'react';

function Callback () {
    useEffect(() => {
        const input = document.getElementById('email')
        const name = document.getElementById('name')
        const textarea = document.getElementById('textarea')

        const error = document.getElementById('error')
        const error1 = document.getElementById('error1')
        const error2 = document.getElementById('error2')
        const errorarea = document.getElementById('error3')
        const errorarea2 = document.getElementById('error4')

        const button = document.getElementById('submit')

        button.addEventListener('click', (event) => {
            event.preventDefault();
            validateEmail(input.value);

        if (!input.value) {
            input.classList.add('red')
            input.classList.remove('white');
            error1.classList.add('show');
            error.classList.remove('show')
        }else
    
        if (validateEmail(input.value)) {
            input.classList.add('white')
            input.classList.remove('red');
            error.classList.remove('show');
            error1.classList.remove('show');
    
        }else {
            input.classList.remove('white');
            input.classList.add('red')
            error.classList.add('show')
            error1.classList.remove('show');
        }

        let valid = name.value;
        let area = textarea.value;

        if (!valid) {
            name.classList.add('red')
            name.classList.remove('white');
            error2.classList.add('show');

        }else {
            name.classList.remove('red');
            name.classList.add('white');
            error2.classList.remove('show');
        }

        if (!area) {
            textarea.classList.add('red')
            textarea.classList.remove('white');
            errorarea.classList.add('show');
            errorarea2.classList.remove('show')
        }else
        
        if (area.length < 10) {
            textarea.classList.add('red')
            textarea.classList.remove('white');
            errorarea.classList.remove('show');
            errorarea2.classList.add('show')
        }else {
            textarea.classList.remove('red')
            textarea.classList.add('white');
            errorarea.classList.remove('show');
            errorarea2.classList.remove('show');
        }

        if (validateEmail(input.value) === true) {
            validTest();
        }

        function validTest() {
            const test = Object();
            test.email = input.value;
            test.name = name.value;
            test.area = textarea.value;
            console.log(test);
            return;
        }
        })

        function validateEmail(email) { 
            console.log(email);
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            console.log(re.test(String(email).toLowerCase()))
            return re.test(String(email).toLowerCase());
        }
    },[]);

   return (
    <div className="Box">
        <div className="Box-pages">
            <ul className="Box-list">
                <li className="Box-text">
                    <Link to="/" className='Box-link'>Вход</Link>
                </li>
                <li className="Box-text">
                    <Link to="/Callback" className='Box-link'>Обратная связь</Link>
                </li>
                <li className="Box-text">
                    <Link to="/PageTest" className='Box-link'>Каталог</Link>
                </li>
            </ul>
            <img className="Box-img" src='https://thumbs.dreamstime.com/b/женщина-компьтер-книжки-кресла-сидя-11918954.jpg' alt='Buy'></img>
        </div>
        <div className="Comment">
            <form className="Callback">
                <h1 className="Callback-title">Обратная связь</h1>
                <div className="Callback-box">
                    <div className="Callback-email">
                        <label className="Callback-label" htmlFor="email">Email</label>
                        <div className="Callback-email__error2" id='error1'>Поле обязательно для заполнения</div>
                        <div className="Callback-email__error" id='error'>Email введен не верно</div>
                        <Input id="email" name="email" type="email" placeholder="Введите Email" />
                    </div>
                    <div className="Callback-name">
                        <label className="Callback-label" htmlFor="text">Имя</label>
                        <div className="Callback-name__error" id='error2'>Поле обязательно для заполнения</div>
                        <Input id="name" name="taxt" type="text" placeholder="Введите свое имя" />
                    </div>
                    <div className="Callback-radio">
                        <h2 className="Callback-head">Пол</h2>
                        <div className="Callback-man">
                            <input className="Callback-man__input" id="radio-1" type="radio" name="gender" value="man"></input>
                            <label className="Callback-man__label" htmlFor="radio-1">Мужчина</label>
                        </div>
                        <div className="Callback-woman">
                            <input className="Callback-woman__input" id="radio-2" type="radio" name="gender" value="woman"></input>
                            <label className="Callback-woman__label" htmlFor="radio-2">Женщина</label>
                        </div>
                    </div>
                    <div className="Callback-text">
                        <label className="Callbck-text__label" htmlFor="textarea"> Ваш комментарий</label>
                        <div className="Callback-textarea__erorr" id='error3'>Поле обязательно для заполнения</div>
                        <div className="Callback-textarea__error2" id='error4'>Text must contain at least 10 characters</div>
                        <textarea className="Callback-textarea" name="textarea" id="textarea" placeholder="Напишите свои комментарии..."></textarea>
                    </div>
                    <div className="Callback-checkbox">
                        <input className="Callback-checkbox__input" id="checkbox-1" type="checkbox"></input>
                        <label className="Callback-checkbox__label" htmlFor="checkbox-1">Я согласен получать обновления на email</label>
                    </div>
                    <div className="Callback-submit">
                        <input className="Callback-submit__input" id='submit' type="submit" value="Отправить"></input>
                    </div>
                </div>
            </form>
        </div>
    </div>
   )
}

export default Callback;
