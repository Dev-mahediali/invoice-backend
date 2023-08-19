import "./pre-start"; // Must be the first import
import logger from "jet-logger";

import EnvVars from "@src/constants/EnvVars";
import server from "./server";
import DriverManager from "./connection/DriverManager";

// **** Run **** //

const SERVER_START_MSG =
  "Express server started on port: " + EnvVars.Port.toString();

server.listen(EnvVars.Port, async () => {
  const driverStatus = await DriverManager();
  logger.info(driverStatus.message);
  logger.info(SERVER_START_MSG);
});
