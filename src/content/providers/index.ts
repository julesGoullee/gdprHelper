import { ConsentManagerProvider } from './consentManager'
import { CpmProvider } from './cpm'
import { DidomiProvider } from './didomi'
import { ElementsProvider } from './elements'
import { GoogleProvider } from './google'
import { IubendaProvider } from './iubenda'
import { OneTrustProvider } from './oneTrust'
import { OrejimeProvider } from './orejime'
import { OsanoProvider } from './osano'
import { SibboProvider } from './shibbo'
import { SirdataProvider } from './sirdata'
import { TcfApiProvider } from './tcfApi'
import { TrustArcProvider } from './trustarc'
import { TrustCommanderProvider } from './trustCommander'
import { UserCentricsProvider } from './userCentrics'

export const providers = [
  new ConsentManagerProvider(),
  new CpmProvider(),
  new DidomiProvider(),
  new ElementsProvider(),
  new GoogleProvider(),
  new IubendaProvider(),
  new OneTrustProvider(),
  new OrejimeProvider(),
  new OsanoProvider(),
  new SibboProvider(),
  new SirdataProvider(),
  new TcfApiProvider(),
  new TrustArcProvider(),
  new TrustCommanderProvider(),
  new UserCentricsProvider(),
]
