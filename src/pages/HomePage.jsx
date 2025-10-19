import { Outlet, Form } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";


export default function HomePage() {
  return (
    <>
      <div>
        <MainNavigation />
        {/* <Form method="post" action="/">
          <input type="text" name="message" />
          <button type="submit">Send</button>
        </Form> */}

        <Outlet />
      </div>
    </>
  );
}

export async function homeActions({ request, params }) {
  debugger;
  console.log(request);
}
