import { ConsentManagerProvider } from './consentManager'
import { CpmProvider } from './cpm'
import { DidomiProvider } from './didomi'
import { ElementsProvider } from './elements'
import { GoogleProvider } from './google'
import { IubendaProvider } from './iubenda'
import { OneTrustProvider } from './oneTrust'
import { OsanoProvider } from './osano'
import { SirdataProvider } from './sirdata'
import { TcfApiProvider } from './tcfApi'
import { TrustArcProvider } from './trustarc'
import { UserCentricsProvider } from './userCentrics'

export const providers = [
  new ConsentManagerProvider(),
  new CpmProvider(),
  new DidomiProvider(),
  new ElementsProvider(),
  new GoogleProvider(),
  new IubendaProvider(),
  new OneTrustProvider(),
  new OsanoProvider(),
  new SirdataProvider(),
  new TcfApiProvider(),
  new TrustArcProvider(),
  new UserCentricsProvider(),
]
