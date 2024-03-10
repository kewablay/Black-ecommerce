import API from "./api";


export const makeOrder = async (orderData) => {
    try {
        const response = await API.post("/customer/orders", orderData);
        return response.data;
    } catch (error) {
        throw error;
    }
}