import chalk from "chalk";

const log = {
  error: (msg: string) => console.log(chalk.red(msg)),
  info: (msg: string) => console.log(chalk.blue(msg)),
  success: (msg: string) => console.log(chalk.green(msg)),
  warning: (msg: string) => console.log(chalk.yellow(msg)),
};

export default log;
