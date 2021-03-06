import CookiecordClient from "cookiecord";
import BasicModule from "./modules/basic";
import { botAdmins, token } from "./env";
import ChallengeModule from "./modules/challenge";
import SpamModule from "./modules/spam";
import FurryModule from "./modules/furry";

const client = new CookiecordClient({
  botAdmins,
  prefix: "al "
});

if (process.env.LIVE_RELOAD) {
  client.loadModulesFromFolder("src/modules");
  client.reloadModulesFromFolder("src/modules");
} else {
  client.registerModule(BasicModule);
  client.registerModule(ChallengeModule);
  client.registerModule(SpamModule);
  client.registerModule(FurryModule);
}

client.login(token);
client.on("ready", () => console.log(`Logged in as ${client.user?.tag}`));
