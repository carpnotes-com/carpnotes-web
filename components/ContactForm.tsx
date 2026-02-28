'use client';

import { useEffect, useState } from "react";
import { addMessage } from "@/server/database-functions";
import Image from "next/image";
import MessageSentImage from "@/public/assets/message_sent.png";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const [isMessageSent, setIsMessageSent] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (formData.email && formData.message) {
            await addMessage(formData.email, formData.message);
            setIsMessageSent(true);
        };
    };

    const handleChange = (e: any) => {
        const {name, value} = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }))
    };

    return (
        <>
            {!isMessageSent ? (
                <form className="flex flex-col" method="POST" onSubmit={handleSubmit}>
                    <div className="w-1xl text-5xl">
                        Do you have any questions? We're in touch
                    </div>
                    <div className="w-md">
                        <div className="mt-8">
                            <div className="flex flex-col">
                                <small>Your email</small>
                                <input
                                required
                                className="bg-neutral-100 rounded-lg text-black h-7 px-2 my-1"
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="flex flex-col">
                                <small>Your message</small>
                                <textarea
                                required
                                className="bg-neutral-100 rounded-lg text-black h-24 px-2 py-1 my-1"
                                style={{ resize: 'none' }}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}></textarea>
                            </div>
                        </div>
                        <div className="mt-5">
                            <button
                            className="text-black bg-amber-100 p-4 rounded-full w-full font-sans"
                            type="submit"
                            onClick={handleSubmit}> 
                                <strong>Contact the team</strong>
                            </button>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="flex flex-col">
                    <Image
                    src={MessageSentImage}
                    alt="MessageSent"
                    width={1}
                    className="w-10 h-10"
                    />
                    <h1 className="text-4xl mt-5">
                        Message sent successfully
                    </h1>
                </div>
            )}
        </>
    );
}