import Link from "next/link";

export function Login() {
    return (
        <>
            <form>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control rounded-3"
                        id="floatingInput"
                        placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control rounded-3"
                        id="floatingPassword"
                        placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <Link href="/common/loginHome"><button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">로그인</button></Link>
                <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                <hr className="my-4"/>
                <h2 className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                <button
                    className="w-100 py-2 mb-2 btn btn-outline-dark rounded-3"
                    type="submit">
                    <svg className="bi me-1" width="16" height="16"><use xlinkHref="#twitter"/></svg>
                    Sign up with Twitter
                </button>
                <button
                    className="w-100 py-2 mb-2 btn btn-outline-primary rounded-3"
                    type="submit">
                    <svg className="bi me-1" width="16" height="16"><use xlinkHref="#facebook"/></svg>
                    Sign up with Google
                </button>
            </form>
        </>
    )
}