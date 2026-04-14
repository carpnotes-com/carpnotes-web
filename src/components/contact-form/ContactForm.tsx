'use client';

import { useState } from "react";
import { addMessage } from "@/src/lib/actions";
import Image from "next/image";
import MessageSentImage from "@/public/assets/message-sent.svg";
import Title from "@/src/components/page-components/Title";

interface PageProps {
    formDict: {
        primaryHeader: string,
        inputTextElements: {
            email: string,
            message: string,
            contactTeamButton: string,
        },
    },
    messageSentDict: {
        success: string,
    },
};

export default function ContactForm({ formDict, messageSentDict }: PageProps) {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });

    const [isMessageSent, setIsMessageSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.email && formData.message) {
            await addMessage(formData.email, formData.message);
            setIsMessageSent(true);
        };
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }))
    };

    return (
        <div className="
        w-full
        ">
            {!isMessageSent ? (

                // Form content
                <form className="
                flex flex-col gap-5
                " method="POST" onSubmit={handleSubmit}>
                    
                    {/* Title */}
                    <Title
                        text={formDict.primaryHeader}
                    />

                    {/* Input fields */}
                    <div className="
                    flex flex-col gap-5
                    lg:w-2/3
                    ">

                        {/* Email input */}
                        <div className="
                        flex flex-col
                        ">
                            <small>
                                {formDict.inputTextElements.email}
                            </small>
                            <input
                                required
                                className="
                                bg-neutral-100 rounded-lg text-black h-7 px-2 my-1
                                "
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Message input */}
                        <div className="
                        flex flex-col
                        ">
                            <small>
                                {formDict.inputTextElements.message}
                            </small>
                            <textarea
                                required
                                className="
                                bg-neutral-100 rounded-lg text-black h-24 px-2 py-1 my-1
                                "
                                style={{ resize: 'none' }}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Send button */}
                        <button
                            className="
                            text-black bg-[#DCC49F] p-4 rounded-full w-full font-dmSans
                            "
                            type="submit">
                            <strong>
                                {formDict.inputTextElements.contactTeamButton}
                            </strong>
                        </button>
                    </div>
                </form>
            ) : (

                // Successfuly sent message content
                <div className="
                flex flex-col items-center
                md:items-start
                ">

                    {/* Image: message cloud with a tick */}
                    <Image
                        src={MessageSentImage}
                        alt="MessageSent"
                        width={1}
                        className="
                        w-10 h-10
                        "
                    />

                    {/* Text */}
                    <h1 className="
                    text-4xl mt-5 text-center
                    md:text-start
                    ">
                        {messageSentDict.success}
                    </h1>
                </div>
            )}
        </div>
    );
}