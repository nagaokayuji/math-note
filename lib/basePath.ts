import { format } from "url";
import getConfig from "next/config";

const { publicRuntimeConfig = {} } = getConfig() || {};
const { basePath } = publicRuntimeConfig;
const path = (path: string): string => (basePath || "") + (path || "");

export default path;
