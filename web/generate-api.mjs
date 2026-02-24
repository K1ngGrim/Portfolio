import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const strapiDir = path.resolve(__dirname, "..", "portfolio-strapi");
const originalDir = __dirname;
const src = path.resolve(__dirname, "..", "portfolio-strapi", "specification.json");
const swagger = path.resolve(__dirname, "swagger.json");
const outDir = path.resolve(__dirname, "projects", "strapi-lib", "src", "lib");

function run(cmd, cwd = originalDir) {
  execSync(cmd, { stdio: "inherit", cwd });
}

function existsOrFail(p, label) {
  if (!fs.existsSync(p)) {
    console.error(`[error] ${label} not found: ${p}`);
    process.exit(1);
  }
}

run("npm run strapi openapi generate", strapiDir);

existsOrFail(src, "Source spec");

fs.copyFileSync(src, swagger);

existsOrFail(swagger, "Generated swagger.json");

run(`npx rimraf "${outDir}"`);

const swaggerForCli = swagger.replace(/\\/g, "/");

const additionalProps = [
  "apiModulePrefix=Strapi",
  "withInterfaces=true",
  "fileNaming=kebab-case",
  "useSingleRequestParameter=true",
  "supportsES6=true",
  "stringEnums=true",
].join(",");

run(
  `npx openapi-generator-cli generate ` +
  `-i "${swaggerForCli}" ` +
  `-g "typescript-angular" ` +
  `-o "${outDir}" ` +
  `--additional-properties "${additionalProps}"`
);

fs.unlinkSync(swagger);
