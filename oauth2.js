
async function getCredentials(token) {
  try {
    const response = await fetch(`https://discord.com/api/users/@me`, {
      method: 'GET',
      headers: {
        Authorization: `${token.token_type} ${token.access_token}`,
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      return new Error(response.statusText);
    }
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  };
};


async function getClientCredentials(client_id, client_secret, scope) {
  try {
    const response = await fetch(`https://discord.com/api/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}&scope=${scope}`,
    });

    if (response.ok) {
      return await response.json();
    } else {
      return new Error(response.statusText);
    }
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  };
};


async function getToken(client_id, client_secret, oauth2_redirect, code) {
  try {
    const redirect = encodeURIComponent(oauth2_redirect);
    const response = await fetch(`https://discord.com/api/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect}&code=${code}`,
    });

    if (response.ok) {
      return await response.json();
    } else {
      return new Error(response.statusText);
    }
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  };
};


async function refreshToken(client_id, client_secret, refresh_token) {
  try {
    const response = await fetch(`https://discord.com/api/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=refresh_token&client_id=${client_id}&client_secret=${client_secret}&refresh_token=${refresh_token}`,
    });

    if (response.ok) {
      return await response.json();
    } else {
      return new Error(response.statusText);
    }
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  };
};


async function revokeToken(client_id, client_secret, token) {
  try {
    const response = await fetch(`https://discord.com/api/oauth2/token/revoke`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `client_id=${client_id}&client_secret=${client_secret}&token=${token}`,
    });

    if (response.ok) {
      return await response.json();
    } else {
      return new Error(response.statusText);
    }
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  };
};

export { getCredentials, getClientCredentials, getToken, refreshToken, revokeToken };