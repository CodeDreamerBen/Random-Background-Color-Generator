function generateBackground() {
    var prompts = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8];
    var a = prompts[Math.floor(Math.random() * prompts.length)];
    var b = prompts[Math.floor(Math.random() * prompts.length)];
    var c = prompts[Math.floor(Math.random() * prompts.length)];
    var d = prompts[Math.floor(Math.random() * prompts.length)];
    var e = prompts[Math.floor(Math.random() * prompts.length)];
    var f = prompts[Math.floor(Math.random() * prompts.length)];
    var hex = `#${a}${b}${c}${d}${e}${f}`
    document.bgColor = hex;
    document.getElementById("set").value = hex;
}