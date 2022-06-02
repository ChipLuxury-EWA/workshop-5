import fs from "fs";

export const folderAndFileInit = async (folder, file) => {
    //check to see if a folder exist and if not create the folder:
    if (!fs.existsSync(folder)) {
        console.log(`Creating folder named: ${folder}`)
        fs.mkdirSync(`${folder}`,{ recursive: true }, (err) => {
            if (err) throw err;
        });
        createFileAndPrintMessage(folder, file)
    } else {
        console.log(`folder ${folder} exist checking file: ${file}.txt`)
        if (!fs.existsSync(`${folder}/${file}.txt`)) {
        createFileAndPrintMessage(folder, file)
        } else {
            console.log(`${file}.txt exist you do not need to init`)
        }
    }
}

const storeFolderNameAndFileNameInDotEnv = async (folder, file) => {
    fs.writeFileSync(`.env`,`FOLDER_NAME="${folder}"\nFILE_NAME="${file}"`)
}

const createFileAndPrintMessage = async (folder,file) => {
    console.log(`Creating new file named: ${file}.txt`)
    storeFolderNameAndFileNameInDotEnv(folder,file)
    fs.writeFileSync(`./${folder}/${file}.txt`,'') // create file
}

export const addNewLine = async (folder, file, line) => {
    const writer = fs.createWriteStream(`./${folder}/${file}.txt`, {flags: 'a'})
    writer.write(`${line}\n`)
    writer.end() // this is like closing the app so maybe don't necessary
}

export const reWriteFile = async (folder, file, allLines) => {
    const writer = fs.createWriteStream(`./${folder}/${file}.txt`);
    writer.write(allLines)
    writer.end()
}

export const readFile = async (folder, file) => {
    return fs.readFileSync(`./${folder}/${file}.txt`, "utf8")
}

export const readFileLineByLine = async (folder, file) => {
    const allLines = await readFile(folder, file)
    const arrayOfLines = allLines.split('\n')
    return arrayOfLines
}

export const removeLineFromFile = async(lineNumber) => {
    const fileArray = await readLogLineByLine();
    fileArray.splice(lineNumber, 1);
    await writeArrayOfLinesToLog(fileArray);
}
