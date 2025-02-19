interface Props {
  list: string[];
}

let sendReq = (list: string[]) => {
  return list;
};

const ClaudeOutput = ({ list }: Props) => {
  let output: string = "How are you" + list.join(" ");

  return (
    <textarea
      className="claude-output"
      placeholder="Empty OutPut"
      value={output}
      readOnly
    ></textarea>
  );
};

export default ClaudeOutput;
