"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders, ClientSafeProvider } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Nav = () => {
    // let isUserSignedIn: boolean = true;
    const {data :session} = useSession();
    const router = useRouter();

    const [providers, setProviders] = useState<ClientSafeProvider[] | null>(null);
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        const addProviders = async () => {
            const res = await getProviders();
            if (res)
                setProviders(Object.values<ClientSafeProvider>(res));
        }
        addProviders();
    }, []);


    return (
        <nav className="flex-between w-full mb-16 pt-2">
            <Link href="/" className="flex gap-2 flex-center">
                <Image
                    src="/assets/images/logo.svg"
                    alt="logo"
                    width={30}
                    height={30}>
                </Image>
                <p className="logo_text">Promptopia</p>
            </Link>

            {/* desktop Navigation */}
            <div className="sm:flex hidden">
                {session?.user ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt" className="black_btn">Create Post</Link>
                        <button type="button" className="outline_btn" onClick={()=>signOut()}>Sign Out</button>

                        <Link href="/profile">
                            <Image
                                src={session?.user.image ?? ''}
                                alt="Profile Pic"
                                width={37}
                                height={37}
                                >
                            </Image>
                        </Link>

                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map(provider => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="black_btn"
                            >
                                Sign In
                            </button>
                        ))}
                    </>
                )}
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div className="flex">
                        <Image
                            src={session?.user.image ?? ''}
                            alt="Profile Pic"
                            width={37}
                            height={37}
                            onClick={() => setToggle((prev) => !prev)}
                        >
                        </Image>

                        {toggle && (
                            <div className="dropdown">
                                <Link href="/profile"
                                    className="dropdown_link"
                                    onClick={() => setToggle(false)}
                                >
                                    Profile
                                </Link>
                                <Link href="/create-prompt"
                                    className="dropdown_link"
                                    onClick={() => setToggle(false)}
                                >
                                    Create Prompt
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setToggle(false)
                                        signOut()
                                        router.push('/')
                                    }}
                                    className="mt-5 w-full black_btn"
                                >
                                    SignOut
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map(provider => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="black_btn"
                            >
                                Sign In
                            </button>
                        ))}
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav