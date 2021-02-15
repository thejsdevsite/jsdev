const { exec } = require("child_process");

exec(`date -u +"%Y-%m-%dT%H:%M:%S.000Z"`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`Date: ${stdout}`);
});