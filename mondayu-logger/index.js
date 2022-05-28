import { Console } from "console";
import fs from "fs";
import { createWriteStream } from "fs";

export const myLogger = new Console({
    stdout: fs.createWriteStream("normalStdoutStream.txt", {'flags': 'a'}),
    stderr: fs.createWriteStream("errStdErr.txt", {'flags': 'a'}),
});



// step 1: use this example: https://melvingeorge.me/blog/save-logs-to-files-nodejs
// export your monday logger here

// step 2: rename the package and publish
