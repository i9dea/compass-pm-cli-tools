import { Command } from "https://deno.land/x/cliffy@v0.24.0/command/mod.ts";
import { localCompassProjectsDirPath } from "../helpers/CompassLocalDirsHelpers.ts";
import {
    ensureDir,
    ensureDirSync,
  } from "https://deno.land/std@0.78.0/fs/mod.ts";
  
ensureDir("./bar"); // returns a promise
ensureDirSync("./ensureDirSync"); // void
export const createProjectCommand = new Command()
    .version("0.1.0")
    .description("Command line framework for Deno")
    .arguments("<project-name>")
    .action((_) => {
        const projectPath = localCompassProjectsDirPath() + `biu`
        console.log(`Creating new project at ${projectPath}`)
        return ensureDir(projectPath)
    })

