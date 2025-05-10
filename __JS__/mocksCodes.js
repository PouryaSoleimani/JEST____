import { getUserByID } from "./mocks";

function calculateTotalPrice(items) {
return items.reduce((total, item) => total + item.price, 0);
}