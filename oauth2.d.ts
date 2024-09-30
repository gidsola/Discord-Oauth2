interface TokenGet {
    token_type: string,// 'Bearer',
    access_token: string,// '2CxyItCTgoKqds14bQCQuX6',
    expires_in: number,// 604800,
    refresh_token: string,// 'zdhUelcaGEStlW7Q5VxkXGp',
    scope: string,// 'email gdm.join guilds guilds.join messages.read identify applications.builds.read connections'
  };

  interface CredentialsGet {
    id: string,// '274685280429015040',
    username: string,// 'goodsie',
    avatar: string,// 'a_5916bc81284d155c8ebc1d89cf47d347',
    discriminator: string,// '0',
    public_flags: number,// 64,
    flags: number,// 64,
    banner: string,// 'a_cd28f5ffd7068ee7f93f8916eff62fdf',
    accent_color: number,// 3550485,
    global_name: string,// 'goodsie',
    avatar_decoration_data: {
      asset: string,// 'a_8552f9857793aed0cf816f370e2df3be',
      sku_id: string,// '1232071712695386162',
      expires_at: null | string | number
    },
    banner_color: string,// '#362d15',
    clan: null | string | number,
    mfa_enabled: boolean,// true,
    locale: string,// 'en-US',
    premium_type: number,// 2,
    email: string,// 'email@home.com',
    verified: boolean,// true
  }

declare function getCredentials(token: { token_type: string; access_token: string }): Promise<CredentialsGet | Error>;

declare function getClientCredentials(client_id: string, client_secret: string, scope: string): Promise<any | Error>;

declare function getToken(client_id: string, client_secret: string, oauth2_redirect: string, code: string): Promise<TokenGet | Error>;

declare function refreshToken(client_id: string, client_secret: string, refresh_token: string): Promise<any | Error>;

declare function revokeToken(client_id: string, client_secret: string, token: string): Promise<any | Error>;

export { getCredentials, getClientCredentials, getToken, refreshToken, revokeToken };
