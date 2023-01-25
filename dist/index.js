"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app_1 = __importDefault(require("./app"));
app_1.default.get("/", (req, res) => {
    res.send("Hi");
});
app_1.default.listen(PORT, () => console.log(`Server init at http://localhost:${PORT}`));



















//Aquí establecemos las variables de entorno, la ruta raíz y por último indicamos el puerto y muestra un mensaje en la consola indicando que el servidor se ha iniciado correctamente.