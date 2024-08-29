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
            <h2>Contact Me!</h2>
            <StyledContactForm>
                <div className="contact-container">
                    <div className="image-section">
                        <img src={getImageUrl("contacts/contactme.png")} alt="Contact Us" />
                    </div>
                    <div className="form-section">
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
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
        margin-top: 75px;
        margin-bottom: -100px;
        font-size: 35px;
        font-weight: 700;
        letter-spacing: 1.75px;
        text-transform: uppercase;
        text-align: center;
    }
`;

const StyledContactForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-bottom: 50px;

    .contact-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        max-width: 1000px;
        background: white;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        overflow: hidden;
    }

    .image-section {
        background: #f0f0f0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .form-section {
        flex: 1;
        padding: 2rem;

        form {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            width: 100%;
            font-size: 16px;

            input {
                width: 100%;
                height: 35px;
                padding: 7px;
                outline: none;
                border-radius: 5px;
                border: 1px solid rgb(220, 220, 220);

                &:focus {
                    border: 2px solid rgba(0, 206, 158, 1);
                }
            }

            textarea {
                max-width: 100%;
                min-width: 100%;
                width: 100%;
                max-height: 100px;
                min-height: 100px;
                padding: 7px;
                outline: none;
                border-radius: 5px;
                border: 1px solid rgb(220, 220, 220);

                &:focus {
                    border: 2px solid rgba(0, 206, 158, 1);
                }
            }

            label {
                margin-top: 1rem;
            }

            input[type="submit"] {
                margin-top: 2rem;
                cursor: pointer;
                background: rgb(249, 105, 14);
                color: white;
                border: none;
            }
        }
    }
`;

export default Contact;
