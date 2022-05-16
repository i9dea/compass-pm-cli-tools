import { Command } from "https://deno.land/x/cliffy@v0.24.0/command/mod.ts";
import { createProjectCommand } from "./CreateProjectCommand.ts";

export const projectManagementCommand = new Command()
    .name("project")
    .version("0.1.0")
    .description("Command line framework for Deno")
    .command("create", createProjectCommand)
