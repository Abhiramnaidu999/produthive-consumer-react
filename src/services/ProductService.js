import axios from 'axios';

const PRODUCTS_RRESTAPI_URL = 'http://localhost:8088/producthive/api/products';
//service layer interacting with the producthive restapi of spring boot
//using axios http library
class ProductService {

    static getProducts(){
        return axios.get(PRODUCTS_RRESTAPI_URL);
    }

}
export default ProductService;