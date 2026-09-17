import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { getImageUrl } from "../../utils.js";
import { Alert, Snackbar } from "@mui/material";

export const Contact = () => {
    const form = useRef();
    const [open, setOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("success");

    const handleClick = (message, severity) => {
        setAlertMessage(message);
        setAlertSeverity(severity);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_w7fd0bb",
                "template_09hzai6",
                form.current,
                "yygfiBWo7As2diPPa"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    handleClick("Message sent successfully!", "success");
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    handleClick("Failed to send message. Please try again.", "error");
                }
            );
    };

    return (
        <Section id="contacts" className="container">
            <h2>Get In Touch</h2>
            <p className="subtitle">
                Have an opportunity or question? Reach out directly or send a message using the form below.
            </p>
            {/* TODO: replace with real contact details */}
            <ul className="contactDetails">
                <li>
                    <strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a>
                </li>
                <li>
                    <strong>Phone:</strong> <a href="tel:+94000000000">+94 00 000 0000</a>
                </li>
            </ul>
            <StyledContactForm>
                <div className="contact-container">
                    <div className="image-section">
                        <img src={getImageUrl("contacts/contactme.png")} alt="Illustration of a person sending a message" />
                    </div>
                    <div className="form-section">
                        <form ref={form} onSubmit={sendEmail}>
                            <label htmlFor="contact-name">Name</label>
                            <input id="contact-name" type="text" name="user_name" required />
                            <label htmlFor="contact-email">Email</label>
                            <input id="contact-email" type="email" name="user_email" required />
                            <label htmlFor="contact-message">Message</label>
                            <textarea id="contact-message" name="message" required />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </StyledContactForm>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert
                    onClose={handleClose}
                    severity={alertSeverity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {alertMessage}
                </Alert>
            </Snackbar>
        </Section>
    );
};

// Styles
const Section = styled.section`
    h2 {
        color: var(--color-text);
        font-size: 50px;
        font-weight: 700;
        letter-spacing: 1.75px;
        text-transform: uppercase;
        text-align: center;
        padding: 65px 0 5px 0;
        text-shadow: none;

        @media (max-width: 768px) {
            font-size: 28px;
        }

        @media (max-width: 480px) {
            font-size: 24px;
        }
    }

    .subtitle {
        max-width: 560px;
        margin: 0 auto;
        text-align: center;
        color: var(--color-text-muted);
        font-size: 17px;
        padding: 0 20px;
    }

    .contactDetails {
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 32px;
        flex-wrap: wrap;
        margin-top: 20px;
        padding: 0 20px;
        color: var(--color-text);
        font-size: 16px;

        a {
            color: var(--color-primary);
            text-decoration: none;

            &:hover {
                color: var(--color-primary-dark);
                text-decoration: underline;
            }
        }
    }
`;

const StyledContactForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 48px 0 80px 0;
    margin-bottom: 0;
    margin-top: 0;

    .contact-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        max-width: 1000px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        box-shadow: 0 16px 40px rgba(15, 23, 42, 0.10);
        border-radius: 10px;
        overflow: hidden;

        @media (max-width: 600px) {
            flex-direction: column;
            width: 80%;
        }
    }

    .image-section {
        background: var(--color-secondary);
        flex: 1;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;

            @media (max-width: 768px) {
                height: 200px;
            }
        }
    }

    .form-section {
        flex: 1;
        padding: 2rem;
        
        @media (max-width: 600px) {
            padding: 0.5rem;
        }

        form {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            width: 100%;
            font-size: 16px;

            input, textarea {
                width: 100%;
                padding: 7px;
                outline: none;
                border-radius: 5px;
                border: 1px solid var(--color-border);
                background: var(--color-bg);
                color: var(--color-text);

                &:focus {
                    border: 2px solid var(--color-primary);
                }

                @media (max-width: 600px) {
                    padding: 5px;
                }
            }

            textarea {
                max-height: 100px;
                min-height: 100px;
                
                @media (max-width: 6000px) {
                    min-height: 60px;
                }
            }

            label {
                margin-top: 1rem;

                @media (max-width:600px) {
                    margin-top: 1rem;
                }
            }

            input[type="submit"] {
                margin-top: 2rem;
                cursor: pointer;
                background: var(--color-primary);
                color: white;
                border: none;
                border-radius: 9999px;
                padding: 10px 24px;
                font-weight: 500;
                text-transform: none;
                transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

                &:hover {
                    background: var(--color-primary-dark);
                    transform: translateY(-1px);
                    box-shadow: 0 10px 24px rgba(var(--color-primary-rgb), 0.35);
                }


                @media (max-width: 600px) {
                    margin: 1rem 0;
                    padding: 10px;
                }
            }
        }
    }
`;

export default Contact;
