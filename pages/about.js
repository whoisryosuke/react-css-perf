import Link from "next/link";
import "../css/index.css";
import "../css/table.css";

export default () => (
  <div>
    <Link href="/">
      <a className="pure-button">About page</a>
    </Link>
    <div>
      <table className="pure-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
          </tr>
        </thead>

        <tbody>
          <tr className="pure-table-odd">
            <td>1</td>
            <td>Honda</td>
            <td>Accord</td>
            <td>2009</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Toyota</td>
            <td>Camry</td>
            <td>2012</td>
          </tr>

          <tr className="pure-table-odd">
            <td>3</td>
            <td>Hyundai</td>
            <td>Elantra</td>
            <td>2010</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Ford</td>
            <td>Focus</td>
            <td>2008</td>
          </tr>

          <tr className="pure-table-odd">
            <td>5</td>
            <td>Nissan</td>
            <td>Sentra</td>
            <td>2011</td>
          </tr>

          <tr>
            <td>6</td>
            <td>BMW</td>
            <td>M3</td>
            <td>2009</td>
          </tr>

          <tr className="pure-table-odd">
            <td>7</td>
            <td>Honda</td>
            <td>Civic</td>
            <td>2010</td>
          </tr>

          <tr>
            <td>8</td>
            <td>Kia</td>
            <td>Soul</td>
            <td>2010</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
