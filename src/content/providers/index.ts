import { AxeptioProvider } from './axeptio'
import { ConsentManagerProvider } from './consentManager'
import { CookieBotProvider } from './cookiebot'
import { CpmProvider } from './cpm'
import { DidomiProvider } from './didomi'
import { ElementsProvider } from './elements'
import { GoogleProvider } from './google'
import { IubendaProvider } from './iubenda'
import { OneTrustProvider } from './oneTrust'
import { OrejimeProvider } from './orejime'
import { OsanoProvider } from './osano'
import { QuantcastProvider } from './quantcast'
import { SibboProvider } from './shibbo'
import { SirdataProvider } from './sirdata'
import { TcfApiProvider } from './tcfApi'
import { TrustArcProvider } from './trustarc'
import { TrustCommanderProvider } from './trustCommander'
import { UserCentricsProvider } from './userCentrics'

export const providers = [
  new AxeptioProvider(),
  new ConsentManagerProvider(),
  new CookieBotProvider(),
  new CpmProvider(),
  new DidomiProvider(),
  new ElementsProvider(),
  new GoogleProvider(),
  new IubendaProvider(),
  new OneTrustProvider(),
  new OrejimeProvider(),
  new OsanoProvider(),
  new QuantcastProvider(),
  new SibboProvider(),
  new SirdataProvider(),
  new TcfApiProvider(),
  new TrustArcProvider(),
  new TrustCommanderProvider(),
  new UserCentricsProvider(),
]
