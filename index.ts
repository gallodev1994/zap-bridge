const proc = Bun.spawn(
  ["bun", "run", "dev"],
  {
    cwd: "./packages/frontend/my-bun-app",
    stdout: "inherit",
    stderr: "inherit"
  }
);
await proc.exited;

const usage = proc.resourceUsage();
console.log(`Max memory used: ${usage?.maxRSS} bytes`);
console.log(`CPU time (user): ${usage?.cpuTime.user} µs`);
console.log(`CPU time (system): ${usage?.cpuTime.system} µs`);

