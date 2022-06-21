
import Link from "next/link";
import { HeadTitle } from "@/components";

export function ReadingBooks() {

    return (
        <div>
        <HeadTitle title="읽은 책" />
            <form >
                <h1>내 서재 관리</h1>
                <button>읽은 책 목록</button>
                <button>찜한 책 목록</button>
                <Link href="/bookSearch/searchRecheck"><button>선택한 책 선택</button></Link>
                <div>
                    <img src='http://image.kyobobook.co.kr/images/book/large/225/l9791191114225.jpg' />
                    <img src='http://image.kyobobook.co.kr/images/book/large/188/l9791161571188.jpg' />
                    <img src='http://image.kyobobook.co.kr/images/book/large/685/l9791191347685.jpg' />
                    <img src='http://image.kyobobook.co.kr/images/book/large/805/l9788933871805.jpg' />
                    <label htmlFor="icon-button-file">
                        <input accept="image/*" id="icon-button-file" type="file"/>
                    </label>
                </div>
            </form>
        </div>
    );
}