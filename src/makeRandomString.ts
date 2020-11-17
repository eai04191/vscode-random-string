import * as vscode from "vscode";

export const makeRandomString = (): string => {
    const config = vscode.workspace.getConfiguration().get("random-string") as {
        charctors: string;
        length: number;
    };

    let result = "";
    const characters = config.charctors;
    const charactersLength = characters.length;
    const length = config.length;

    new Array(length).fill({}).forEach(() => {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    });

    return result;
};
