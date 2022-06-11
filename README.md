# Discord Oauth2 Zero  
**Discord Oauth2 implement for Autocode with native webhook handling providing a zero dependency solution.**  

This package will gain more functions in time.  

### Functions:
**https://discord.com/developers/docs/topics/oauth2**  

| name | param | description |
|---|---|---|
| getToken()  | code | Get user or bot Bearer Token. |
| getCredentials()  | bearer_token | Get user credentials. |
| getClientCredentials()  | scope | Get bot owner credentials. |
| refreshToken()  | refresh_token | Refresh a Bearer Token. |
| revokeToken(bearer_token)  | bearer_token | Revoke a Bearer Token. |  


**This package also requires a new environment variable to be added:*  
```process.env.OAUTH2_REDIRECT```  

**OAUTH2_REDIRECT** is the url endpoint for your Oauth2.  
**It must match your redirect url as set in the discord development portal.*  
  
There will be a tutorial on this soon.  

#### Basic Usage:   
  ```js
const oauth2 = require('discord-oauth2-zero');  

let bearerToken = await oauth2.getToken(code);  
let credentials = await oauth2.getCredentials(bearer_token);  
let clientCredentials = await oauth2.getClientCredentials(scope);  
let refreshToken = await oauth2.refreshToken(refresh_token);  

**revokeToken() is still untested**  
let revoked = await oauth2.revokeToken(bearer_token);
```


Created in:
[![Created in Autocode. (https://Autocode.com)](https://content.public.files.stdlib.com/shared/static/branding/autocode-logo.svg "Autocode")](https://Autocode.com) Autocode.
