import {fileURLToPath} from 'url';
import { dirname } from 'path';
import bcrypt from 'bcrypt';

export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isValidPassword = (user, password) => bcrypt.compareSync(user, password);

export function authUser (req, res, next) {
    if (!req.session.usuario) {
        return res.status(403).send("Debes hacer LogIn")
    }
    if (req.session.usuario.typeofuser==='user') {
      next();
    } else {
      res.status(401).send("No autorizado");
    }
  }
  
  export function authAdmin (req, res, next) {
    if (!req.session.usuario) {
        return res.status(403).send("Debes hacer LogIn")
    }
  
    if (req.session.usuario.typeofuser=='admin') {
      next();
    } else {
      res.status(401).send("No autorizado");
    }
  }

const __filename = fileURLToPath (import.meta.url)
const __dirname = dirname (__filename);


export default __dirname 