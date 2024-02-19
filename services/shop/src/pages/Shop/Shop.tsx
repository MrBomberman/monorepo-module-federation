import { Link } from "react-router-dom";
import { shopRoutes } from '@packages/shared/src/routes/shop';

const Shop = (params: any) => {
    return (
        <h1>Shop
            <div>Hello shoooop</div>
            <Link to={shopRoutes.second}>Second page</Link>
        </h1>
    )
}


export default Shop;