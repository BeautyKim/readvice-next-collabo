import Link from "next/link";

export function Login() {
    return (
        <>
            <form>
                <div className="mb-3 form-floating">
                    <input
                        type="email"
                        className="form-control rounded-3"
                        id="floatingInput"
                        placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="mb-3 form-floating">
                    <input
                        type="password"
                        className="form-control rounded-3"
                        id="floatingPassword"
                        placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <Link href="/common/loginHome"><button className="mb-2 w-100 btn btn-lg rounded-3 btn-primary" type="submit">로그인</button></Link>
                <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                <hr className="my-4"/>
                <h2 className="mb-3 fs-5 fw-bold">Or use a third-party</h2>
                <button
                    className="py-2 mb-2 w-100 btn btn-outline-dark rounded-3"
                    type="submit">
                    Sign up with GitHub
                </button>
                <button
                    className="py-2 mb-2 w-100 btn btn-outline-primary rounded-3"
                    type="submit">
                    Sign up with Google
                </button>
            </form>
        </>
    )
}