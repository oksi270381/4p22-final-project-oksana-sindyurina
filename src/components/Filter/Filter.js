import Button from '../Button/Button';
import './Filter.css';

function Filter () {
    return (
        <div className="Filter-box">
            <Button>Все</Button>
            <Button>Мебель</Button>
            <Button>Электроника</Button>
            <Button>Одежда</Button>
            <Button>Обувь</Button>
            <Button>Другое</Button>
        </div>
    )
};

export default Filter;