import { LocalizedString } from "../models/types"
import { Owner } from "../models/owner"
import { Injectable } from "@furystack/inject"

@Injectable()
export class OwnerService {
  public Get(): Owner {
    return {
      Name: "Gallay Lajos",
      Title: "owner-title",
      Address: <LocalizedString>"1144 Budapest, Rákosfalva park 4.",
      Email: "gallay.lajos@gmail.com",
      BirthDate: new Date("1985-09-25"),
      BirthPlace: "Budapest, Hungary",
      Phone: "+36 20 530 7414",

      PhotoURL: "./assets/lalo.jpg",
      LinkedinProfileUrl: "https://www.linkedin.com/in/gallay-lajos-3b735185",
      GithubProfileUrl: "https://github.com/gallayl",
      StackOwerflowProfileUrl:
        "http://stackoverflow.com/users/7418775/lajos-gallay",
      GooglePlusProfileUrl: "https://plus.google.com/106743540419438515130",
      FacebookProfileUrl: "https://www.facebook.com/lajos.gallay",
      LocationQuery: "Budapest,+R%C3%A1kosfalva+park",
    }
  }
}
