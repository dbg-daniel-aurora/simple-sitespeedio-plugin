import { SitespeedioPlugin } from "@sitespeed.io/plugin";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default class MyPlugin extends SitespeedioPlugin {
  constructor(options, context, queue) {
    super({ name: "myplugin", options, context, queue });
  }

  open(context) {
    this.make = context.messageMaker("myplugin").make;
  }

  processMessage(message, queue) {
    if (message.type === "sitespeedio.setup") {
      queue.postMessage(
        this.make("browsertime.config", {
          postURLScript: resolve(__dirname, "mypluginPostScript.cjs"),
        })
      );

    }
  }
}
