import { Command } from "https://deno.land/x/cliffy@v0.24.0/command/mod.ts";
import { projectManagementCommand } from "./commands/ProjectManagementCommand.ts";

await new Command()
    .command("project", projectManagementCommand)
    .parse(Deno.args);