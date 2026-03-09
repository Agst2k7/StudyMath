import { evaluate } from "https://cdn.jsdelivr.net/npm/mathjs@11/+esm";
import "./classes";

const input_box = document.getElementById("input-box");
const submit_btn = document.getElementById("submit-btn");
const score_label = document.getElementById("score-label");
const quiz_warn_msg = document.getElementById("quiz-warn-msg");
const form = document.getElementById("quiz-form");
const atmp_mgp = document.getElementById("atmp-msg");
const instructions_div = document.getElementById("instructions-div");
const instruction = document.getElementById("instruction")

function generateEquation(level) {
    if (level == 1) {
        generateEqEasy();
    }
}

ops = ["+", "-", "*", "/"];

function generateEqEasy() {

    templates = [
        // 1 parametro
        [`${ex}`],
        // 2 parametros
        [`${a} ${op} ${b}`],
        // 3 parametros
        [`${a} ${op} ${b} ${op} ${c}`],
        // 4 parametros
        [`${a} ${op} ${b} ${op} ${c} ${op} ${d}`]
    ]
    const index1 = Math.floor(Math.random()*templates.length);
    const index2 = Math.floor(Math.random()*templates[index].length);

    if(index1 == 0) {
        ops = [`log${base}${a}`, `nthroot(${a}, ${index})`]
    }

    return expr
}