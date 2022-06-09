# discord-oauth2-zero  
**Discord Oauth2 implement for Autocode with native webhook handling for a zero dependency solution.**  

#### Brief Usage:   
**This package also requires a new .env to be added:```process.env.OAUTH2_REDIRECT```**
Redirect is the url endpoint for your oauth.  
It must match your redirect url as set in the discord development portal.  

const oauth2 = require('discord-oauth2-zero');  

let bearerToken = await oauth2.getToken(code);  
let credentials = await oauth2.getCredentials(bearer_token);  
let clientCredentials = await oauth2.getClientCredentials(scope);  
let refreshToken = await oauth2.refreshToken(refresh_token);  

**revokeToken() is still untested**  
_let revoked = await oauth2.revokeToken(bearer_token);_  
