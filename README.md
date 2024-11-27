# Discord Oauth2 Zero  

**Discord Oauth2 implement**  

#### Functions  

<https://discord.com/developers/docs/topics/oauth2>  

| name | param | description |
|---|---|---|
| getToken()  | code | Get user or bot Bearer Token. |
| getCredentials()  | bearer_token | Get user credentials. |
| getClientCredentials()  | scope | Get bot owner credentials. |
| refreshToken()  | refresh_token | Refresh a Bearer Token. |
| revokeToken()  | bearer_token | Revoke a Bearer Token. |  

**<u>OAUTH2_REDIRECT</u>:** is the url endpoint for your Oauth2.  
**This is the same redirect url used for your oauth2 authorization link that was generated in the Discord developers portal.*  

#### Basic Usage

```js
const oauth2 = require('discord-oauth2-zero');  

let bearerToken = await oauth2.getToken(CLIENT_ID, CLIENT_SECRET, OAUTH2_REDIRECT, CODE);  
let refreshToken = await oauth2.refreshToken(CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN);  
let clientCredentials = await oauth2.getClientCredentials(CLIENT_ID, CLIENT_SECRET, SCOPE);  
let credentials = await oauth2.getCredentials(BEARER_TOKEN);  

revokeToken() is still untested  
let revoked = await oauth2.revokeToken(CLIENT_ID, CLIENT_SECRET, BEARER_TOKEN);
```

Eventually more functions will be added.  
SOON

