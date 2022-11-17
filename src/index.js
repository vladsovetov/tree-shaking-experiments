import { addDays, addMonths } from "date-fns";

const d = addDays(new Date(), 2);
console.log("d", d);
const m = addMonths(new Date(), 2);
console.log("m", m);
