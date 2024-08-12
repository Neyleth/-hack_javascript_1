let fnMsg = (hack, output, target) => `
${"=".repeat("50")}
⚡️ ${hack.toUpperCase()} ⚡️
${"-".repeat("50")}
[x] result | ${output?"output":""} => ${target} 
${"=".repeat("50")}
`;

let fnSuccess = (n) =>`HACK-${n} 🏆: COMPLETADO 💙`

let fnReject = (n) => "[BUG 🔥] UFF SE ENCONTRÓ UN BUG EN HACK-1 💔"

module.exports = {
  fnMsg,
  fnSuccess,
  fnReject
};