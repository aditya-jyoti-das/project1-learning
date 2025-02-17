const ReactDocs = () => {
  let str: string = `React creates a virtual DOM (Document Object Model), which is a lightweight copy of the actual DOM.
When you make changes to the UI, React first updates the virtual DOM, and then compares it to the actual DOM (a process known as reconciliation).
This process helps React update only the parts of the UI that have changed, making it much faster than traditional methods.`;
  let list: string[] = str.split(".");

  return (
    <main>
      <div className="ReactDocs">
        <img
          src="src/assets/react.svg"
          alt="COUNT NOT FIND ANY LINK"
          height="40px"
          width="40px"
          style={{ margin: "30px" }}
        />
        <h1>Fun fact about React</h1>
        <ol className="list-group">
          {list.map((point, index) => (
            <p key={index}>
              {" "}
              <li
                className="list-group-item list-group-item-success"
                style={{ margin: "4px" }}
                key={index}
              >
                {point}
              </li>
            </p>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default ReactDocs;
