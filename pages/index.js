import Link from 'next/link'
import "../css/index.css";
import "../css/form.css";

export default () => (
  <div>
  <Link href="/about">
    <a className="pure-button">Welcome to next.js!</a>
  </Link>

    <div>
      <form className="pure-form pure-form-stacked">
        <fieldset>
          <legend>A Stacked Form</legend>

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email" />
            <span className="pure-form-message">This is a required field.</span>

          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Password" />

          <label htmlFor="state">State</label>
          <select id="state">
            <option>AL</option>
            <option>CA</option>
            <option>IL</option>
          </select>

          <label htmlFor="remember" className="pure-checkbox">
            <input id="remember" type="checkbox" /> Remember me
        </label>

          <button type="submit" className="pure-button pure-button-primary">Sign in</button>
        </fieldset>
      </form>

    </div>
  </div>
);
