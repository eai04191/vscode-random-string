import * as vscode from "vscode";
import { makeRandomString } from "./makeRandomString";

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
