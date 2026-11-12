const proc = Bun.spawn(
  ["bun", "run", "start:dev"],
  {
    cwd: "./packages/backend/api",
    stdout: "inherit",
    stderr: "inherit"
  }
);

const shutdown = () => {
  // PID negativo = envia o sinal para o grupo de processos inteiro
  try { process.kill(-proc.pid, "SIGTERM"); } catch {}
};
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

await proc.exited;

//Process usage metrics
const usage = proc.resourceUsage();
const maxRssMb = Number(usage?.maxRSS ?? 0) / 1024 / 1024;
const userMs = Number(usage?.cpuTime.user ?? 0) / 1000;
const systemMs = Number(usage?.cpuTime.system ?? 0) / 1000;

console.log(`Max memory used: ${maxRssMb.toFixed(1)} MB`);
console.log(`CPU time (user): ${userMs.toFixed(0)} ms`);
console.log(`CPU time (system): ${systemMs.toFixed(0)} ms`);