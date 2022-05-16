export function localCompassProjectsDirPath()
{
    const userPath = Deno.env.get("HOME");
    const projectsDirectoryName = "Projects"
    return userPath + "/" + projectsDirectoryName + "/"
} 