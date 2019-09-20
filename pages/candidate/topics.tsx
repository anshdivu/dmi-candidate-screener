import Link from "next/link";

export default function Topics() {
  return (
    <div>
      <h1>
        <strong>Topics</strong>
      </h1>
      <ol>
        <li>
          <Link href="/candidate/Java">
            <a>JAVA</a>
          </Link>
        </li>
        <li>
          <Link href="/candidate/JavaScript">
            <a>JavaScript</a>
          </Link>
        </li>
        <li>
          <Link href="/candidate/C-sharp">
            <a>C#</a>
          </Link>
        </li>
        <li>
          <Link href="/candidate/Azuredev">
            <a>Azure Developer</a>
          </Link>
        </li>
        <li>
          <Link href="/candidate/Node">
            <a>Node</a>
          </Link>
        </li>
        <li>
          <Link href="/candidate/Azurearchitect">
            <a>Azure Architect</a>
          </Link>
        </li>
        <li>
          <Link href="/candidate/Aws">
            <a>AWS</a>
          </Link>
        </li>
        <li>
          <Link href="/candidate/React">
            <a>React</a>
          </Link>
        </li>
        <li>
          <Link href="/candidate/Angular">
            <a>Angular</a>
          </Link>
        </li>
      </ol>
    </div>
  );
}
