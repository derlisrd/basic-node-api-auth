import { Command } from 'commander';
const program = new Command();


program.command('migrate')
  .description('Migrate')
  .argument('<argument>', 'argument')
  .option('--seed', 'display just the first substring')
  .action((argument, options) => {
    //const limit = options.first ? 1 : undefined;
    //console.log(str.split(options.separator, limit));
    console.log(options.seed)
    console.log(argument)
  });

program.parse();