import React from "react";
import Link from "next/link";

export default () => (
  <ul>
    <li>
      <Link href="/candidate/new">
        <button type="submit" className="button is-link">
          Create new candidate
        </button>
      </Link>
    </li>
  </ul>
);
