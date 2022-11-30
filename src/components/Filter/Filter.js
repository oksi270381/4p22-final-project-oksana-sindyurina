import Button from '../Button/Button';
import './Filter.css';

function Filter () {
    return (
        <div className="Filter-box">
            <Button>All</Button>
            <Button>Furniture</Button>
            <Button>Electronics</Button>
            <Button>Clothes</Button>
            <Button>Shoes</Button>
            <Button>Others</Button>
        </div>
    )
};

export default Filter;