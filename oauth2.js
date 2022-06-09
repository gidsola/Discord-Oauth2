//***************************************/
//      Discord Oauth2 implement for Autocode
//  https://discord.com/developers/docs/topics/oauth2#oauth2
//***************************************/
module.exports = {
  //
  getCredentials: async (token) => {
    try {
      if (
        (res = await get({
          url: encodeURI(`discord.com`),
          path: encodeURI(`/api/users/@me`),
          headers: {
            Authorization: `${token.token_type} ${token.access_token}`,
          },
          body: ``,
        }))
      ) {
        return JSON.parse(res.body);
      } else return false;
    } catch (e) {
      console.log(e);
    }
  },
  //
  getClientCredentials: async (scope) => {
    try {
      if (
        (res = await get({
          url: encodeURI(`discord.com`),
          path: encodeURI(`/api/users/@me`),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&scope=${scope}`,
        }))
      ) {
        return JSON.parse(res.body);
      } else return false;
    } catch (e) {
      console.log(e);
    }
  },
  //
  getToken: async (code) => {
    try {
      redirect = encodeURIComponent(process.env.OAUTH2_REDIRECT);
      if (
        (oauth_ = await post({
          url: encodeURI(`discord.com`),
          path: encodeURI(`/api/oauth2/token`),
          statusCode: 200,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `grant_type=authorization_code&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&redirect_uri=${redirect}&code=${code}`,
        }))
      ) {
        return JSON.parse(oauth_.body);
      } else return false;
    } catch (e) {
      console.log(e);
    }
  }, //eo getToken
  //
  //refreshToken
  refreshToken: async (refresh_token) => {
    try {
      if (
        (oauth_ = await post({
          url: encodeURI(`discord.com`),
          path: encodeURI(`/api/oauth2/token`),
          statusCode: 200,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `grant_type=refresh_token&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&refresh_token=${refresh_token}`,
        }))
      ) {
        return JSON.parse(oauth_.body);
      } else return false;
    } catch (e) {
      console.log(e);
    }
  }, //eo refreshToken
  //
  //revokeToken
  revokeToken: async (token) => {
    try {
      if (
        (oauth_ = await post({
          url: encodeURI(`discord.com`),
          path: encodeURI(`/api/oauth2/token/revoke`),
          statusCode: 200,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&token=${token}`,
        }))
      ) {
        return JSON.parse(oauth_.body);
      } else return false;
    } catch (e) {
      console.log(e);
    }
  }, //eo revokeToken
};


//method GET
async function get(params) {
  return new Promise(async function (resolve, reject) {
    const https = require('node:https');
    const options = {
      host: params.url,
      port: 443,
      path: params.path,
      method: 'GET',
      headers: params.headers,
    };
    options.agent = new https.Agent(options);

    let req = await https.request(options, async (res) => {
      let data = '';
      res.on('data', async (readable) => {
        data += readable;
      });
      res.on('end', async () => {
        result = {};
        result.statusCode = res.statusCode;
        result.headers = res.headers;
        result.body = data;
        resolve(result);
      });
    });
    req.on('error', (e) => {
      console.error(e);
    });
    req.end();
  });
};
//method POST
async function post(params) {
  return new Promise(async function (resolve, reject) {
    const https = require('node:https');
    const options = {
      host: params.url,
      port: 443,
      path: params.path,
      method: 'POST',
      headers: {
        'Content-Type':
          params.headers['Content-Type'] ??
          params.headers['content-type'] ??
          '',
        'Content-Length':
          params.headers['Content-Length'] ??
          params.headers['content-length'] ??
          Buffer.byteLength(params.body),
      },
    };
    options.agent = new https.Agent(options);

    let req = await https.request(options, async (res) => {
      let data = '';
      res.on('data', async (readable) => {
        data += readable;
      });
      res.on('end', async () => {
        result = {};
        result.statusCode = res.statusCode;
        result.headers = res.headers;
        result.body = data;
        resolve(result);
      });
    });
    req.on('error', (e) => {
      console.error(e);
    });
    req.write(params.body);
    req.end();
  });
};
//method PATCH
async function patch(params) {
  return new Promise(async function (resolve, reject) {
    const https = require('node:https');
    const options = {
      host: params.url,
      port: 443,
      path: params.path,
      method: 'PATCH',
      headers: {
        'Content-Type':
          params.headers['Content-Type'] ??
          params.headers['content-type'] ??
          '',
        'Content-Length':
          params.headers['Content-Length'] ??
          params.headers['content-length'] ??
          Buffer.byteLength(params.body),
      },
    };
    options.agent = new https.Agent(options);

    let req = await https.request(options, async (res) => {
      let data = '';
      res.on('data', async (readable) => {
        data += readable;
      });
      res.on('end', async () => {
        result = {};
        result.statusCode = res.statusCode;
        result.headers = res.headers;
        result.body = data;
        resolve(result);
      });
    });
    req.on('error', (e) => {
      console.error(e);
    });
    req.write(params.body);
    req.end();
  });
};
//method DELETE
async function del(params) {
  return new Promise(async function (resolve, reject) {
    const https = require('node:https');
    const options = {
      host: params.url,
      port: 443,
      path: params.path,
      method: 'DELETE',
      headers: {
        'Content-Type':
          params.headers['Content-Type'] ??
          params.headers['content-type'] ??
          '',
        'Content-Length':
          params.headers['Content-Length'] ??
          params.headers['content-length'] ??
          Buffer.byteLength(params.body),
      },
    };
    options.agent = new https.Agent(options);

    let req = await https.request(options, async (res) => {
      let data = '';
      res.on('data', async (readable) => {
        data += readable;
      });
      res.on('end', async () => {
        result = {};
        result.statusCode = res.statusCode;
        result.headers = res.headers;
        result.body = data;
        resolve(result);
      });
    });
    req.on('error', (e) => {
      console.error(e);
    });
    req.write(params.body);
    req.end();
  });
};