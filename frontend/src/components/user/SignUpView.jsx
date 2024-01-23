import React, { useState } from "react";
import axiosInstance from "../../api/axiosInstance";

const SignUpView = () => {
    const [signUpInput, setSignUpInput] = useState({
        userId: "",
        password: "",
        userNm: "",
        userEmail: "",
    });

    const handleInputChange = (e) => {
        setSignUpInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        // console.log(e.target);
    };

    const onSignUp = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosInstance.post(`/com/join`, {
                userId: signUpInput.userId,
                password: signUpInput.password,
                userNm: signUpInput.userNm,
                userEmail: signUpInput.userEmail,
            });
            if (res.status === 200) {
                console.log(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="max-w-sm mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <form className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-gray-900">
                    앵모아 회원가입
                </h5>
                <div>
                    <label
                        htmlFor="userNm"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        이름
                    </label>
                    <input
                        type="userNm"
                        name="userNm"
                        id="userNm"
                        value={signUpInput.userNm}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="홍길동"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="userId"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        아이디
                    </label>
                    <input
                        type="userId"
                        name="userId"
                        id="userId"
                        value={signUpInput.userId}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="아이디"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        비밀번호
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={signUpInput.password}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="passwordRe"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        비밀번호 확인
                    </label>
                    <input
                        type="passwordRe"
                        name="passwordRe"
                        id="passwordRe"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="userEmail"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        이메일
                    </label>
                    <input
                        type="userEmail"
                        name="userEmail"
                        id="userEmail"
                        value={signUpInput.email}
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name@company.com"
                        required
                    />
                </div>
                <button
                    type="submit"
                    onClick={onSignUp}
                    className="w-50 text-blue-400 bg-white border border-blue-400 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    다음 페이지
                </button>
            </form>
        </div>
    );
};

export default SignUpView;
