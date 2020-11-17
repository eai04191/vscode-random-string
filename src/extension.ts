import * as vscode from "vscode";

const makeRandomString = (): string => {
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

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand(
        "random-string.insertRandomString",
        () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                return;
            }

            const cursor = editor.selection.active;

            editor.edit((editBuilder) => {
                editBuilder.insert(cursor, makeRandomString());
            });
        }
    );

    context.subscriptions.push(disposable);
}
