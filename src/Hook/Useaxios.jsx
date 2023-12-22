import axios from "axios";

const axiossecure=axios.create({
    baseURL: 'https://task-managment-server-two.vercel.app' 
})
const Useaxios = () => {
    return axiossecure
};

export default Useaxios;