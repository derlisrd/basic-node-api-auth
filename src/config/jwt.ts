import config from "./app";

export const jwtConfig = {
    secret: config.jwtsecret,
    expiresIn: '1h' 
  };