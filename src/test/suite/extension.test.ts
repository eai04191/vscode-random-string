/* eslint-env mocha */
import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
import { makeRandomString } from "../../makeRandomString";
// import * as myExtension from '../../extension';

suite("Extension Test Suite", () => {
    test("makeRandomString", () => {
        const config = vscode.workspace
            .getConfiguration()
            .get("random-string") as any;
        assert.equal(config.length, makeRandomString().length);
    });
});
