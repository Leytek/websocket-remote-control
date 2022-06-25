export default function parseCommand(message: string): { command: string, arg1?: number, arg2?: number } {
  const args = message.split(' ');
  return { command: args[0], arg1: Number(args[1]), arg2: Number(args[2]) };
}
